const server = require("express")();
const { PORT } = require("./Constants");
const router = new (require("./Router"))(server);

if(require.main===module){
    router.initialize(PORT);
};

module.exports = server;