require("dotenv").config();
const { AWS_ACCESS, AWS_KEY, PORT, ENV  } = process.env;

module.exports = {
    AWS_ACCESS,
    AWS_KEY,
    PORT,
    ENV
};