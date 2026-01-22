require("dotenv").config();
let { AWS_ACCESS, AWS_KEY, PORT, NODE_ENV  } = process.env;

PORT = PORT || 3000
module.exports = {
    AWS_ACCESS,
    AWS_KEY,
    PORT,
    NODE_ENV
};