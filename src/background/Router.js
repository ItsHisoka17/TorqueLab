const { json } = require("express");
const calc = require("./Calc");
const error = require("./ErrorHandler");

class Router {
    constructor(server){
        this.server = server;
        server.use(json());

        server.get("/", (req, res)=> {
            res.status(200);
        });

        server.post("/api/calculate", (req, res)=> {
            try {
            calc(req, res)
            } catch (e) {
                error({message: e, status: 400}, req, res);
            };
        });
    };


    initialize(port){
        console.log("Server Initializing...");
        this.server.listen(port, (()=> {
            console.log(`Server Initialized\nServer Running | Port [${port}]`);
        }));
    };
};

module.exports = Router;