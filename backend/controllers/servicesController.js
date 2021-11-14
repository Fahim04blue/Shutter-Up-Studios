/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const Service = require('../models/Services');
const Category = require('../models/Category');
const cloudinary = require('../lib/cloudinary');

const createService = async (req, res) => {
  try {
    const service = req.body;
    const upload = await cloudinary.uploader.upload(req.file.path);

    const newService = new Service({
      ...service,
      image: upload.secure_url,
      cloudinary_id: upload.public_id,
    });
    const createdService = await newService.save();
    await Category.updateOne(
      {
        _id: service.category,
      },
      {
        $push: {
          services: createdService._id,
        },
      }
    );

    res
      .status(200)
      .json({ message: 'Service created Successfully', result: newService });
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getService = async (req, res) => {
  let query;
  const reqQuery = { ...req.query };

  // console.log({ before: queryStr });
  query = Service.find(reqQuery);

  console.log({ after: req.query });

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',').join(' ');
    query = query.sort(sortByArr);
  }

  if (req.query.limit) {
    query = query
      .select({
        description: 0,
      })
      .limit(4);
  }

  try {
    const service = await query.populate('category', 'name _id');
    res.status(200).json({
      message: 'All Services',
      result: service,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const serviceById = await Service.findById({ _id: req.params.id });
    res.status(200).json({
      message: 'Service by ID',
      result: serviceById,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete({ _id: req.params.id });
    await Category.updateOne(
      { _id: service.category },
      { $pull: { services: req.params.id } }
    );
    await cloudinary.uploader.destroy(service.cloudinary_id);
    res.status(200).json({ message: 'Service Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createService,
  getService,
  getServiceById,
  deleteService,
};
