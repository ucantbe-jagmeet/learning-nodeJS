const path = require("path");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const cloudinary = require("cloudinary").v2;

const uploadProductImageLocal = async (req, res) => {
  // check if file exists
  // check format
  // check size

  if (!req.files) {
    throw new CustomError.BadRequestError("No file Uploaded");
  }

  const productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload Image");
  }
  const maxSize = 10 * 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload Image smaller than 1kb"
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  //   console.log(req.files.image);

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = { uploadProductImageLocal, uploadProductImage };
