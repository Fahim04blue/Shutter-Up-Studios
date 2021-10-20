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

module.exports = { createService };
