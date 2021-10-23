const Service = require('../models/Services');
const cloudinary = require('../lib/cloudinary');

const createService = async (req, res) => {
  try {
    const { name, summary, price, desc1, desc2, desc3, desc4 } = req.body;
    const upload = await cloudinary.uploader.upload(req.file.path);

    const newService = new Service({
      name,
      summary,
      price,
      desc1,
      desc2,
      desc3,
      desc4,
      image: upload.secure_url,
      cloudinary_id: upload.public_id,
    });
    await newService.save();
    res
      .status(200)
      .json({ message: 'Service created Successfully', result: newService });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getService = async (req, res) => {
  try {
    const service = await Service.find();
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

const getLimitedService = async (req, res) => {
  try {
    const service = await Service.find()
      .select({
        desc1: 0,
        desc2: 0,
        desc3: 0,
        desc4: 0,
      })
      .limit(4)
      .exec();
    res.status(200).json({
      message: 'Landing Page Services',
      result: service,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete({ _id: req.params.id });
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
  getLimitedService,
  deleteService,
};
