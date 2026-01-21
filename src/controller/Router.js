const express = require("express");
const calc = require("../background/Calc");
const error = require("./ErrorHandler");

class Router {
    constructor(server){
        this.server = server;
        server.use(express.json());

        server.post("/api/calculate", (req, res)=> {
            try {
            if (req.body&&Object.hasOwn(req.body, "data")){
                let data = calc(req.body.data);
                return res.json(data)
            } else {
                return error({message: "400 Invalid Request", status: 400}, req, res)
            }
            } catch (e) {
                error({message: e, status: 400}, req, res);
            };
        });

        server.use(express.static(`${process.cwd()}/src/client/dist`));

    };

    initialize(port){
        console.log("Server Initializing...");
        let instance = this.server.listen(port, "0.0.0.0", (()=> {
            console.log(`Server Initialized\nServer Running | Port [${port}]`);
        }));

        process.on("SIGTERM", ()=> {
            if (instance.close) instance.close(()=> {
                console.log("Signal Received [SIGTERM] | Closing Server");
            });
        });
    };
};

module.exports = Router;