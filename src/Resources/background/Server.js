const server = require("express")();
const { PORT } = require("./Constants");
const router = require("./Router");

new router(server).initialize(PORT);