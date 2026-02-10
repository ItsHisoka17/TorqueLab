const express = require("express");
const calc = require("../background/Calc");
const error = require("./ErrorHandler");

class Router {
    /**
     * @param {import ("../../typings/Typings").App} server
     */
    constructor(server){
        this.server = server;
        server.use(express.json());

        server.post("/api/calculate", (req, res)=> {
            try {
            if (req.body&&Object.hasOwn(req.body, "data")){
                let data = calc(req.body.data);
                return res.json(data)
            } else {
                return error({message: "400 Invalid Request", status: 400}, res)
            }
            } catch (e) {
                error({message: e, status: 400}, res);
            };
        });

        server.use(express.static(`${process.cwd()}/src/client/dist`));

    };

    initialize(port){
        console.log("Server Initializing...");
        let instance = this.server.listen(port, "0.0.0.0", (()=> {
            console.log(`Server Initialized\nServer Running | Port [${instance.address()?.port||port}] | PID [${process.pid}]`);
        }));
        /**
         * Listen for proccess shutdown signal [SIGTERM] and close connection safely
         */
        process.on("SIGTERM", (signal)=> {
            if (instance.close) instance.close(()=> {
                console.log(`Signal Received [${signal}] | Closing Server`);
            });
        });
        return this.server;
    };
};

module.exports = Router;