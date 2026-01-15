require("dotenv").config();
const { AWS_ACCESS, AWS_KEY, PORT, ENV  } = process.env;

PORT = PORT || 3000
module.exports = {
    AWS_ACCESS,
    AWS_KEY,
    PORT,
    ENV
};