const Review = require("../models/Review");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { checkPermissions } = require("../utils");

const createReview = async (req, res) => {
  res.send("create review");
};
const getAllReviews = async (req, res) => {
  res.send("get all reviews");
};
const getSingleReview = async (req, res) => {
  res.send("get single reviews");
};
const updateReview = async (req, res) => {
  res.send("update reviews");
};
const deleteReview = async (req, res) => {
  res.send("delete reviews");
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
