/**
 * Testing API Router | Backend | Frontend
 * Testing to be implemented without external modules
*/

const { Server } = require("tls");
const { testData, routes, expectedResult } = require("./Constants");
const server = require("../src/controller/Server");

/**
 * Testing for API Route api/calculate
*/
test("api/calculate Route Test", async ()=> {
    let routeAddr;
    let agent = server.listen(0);
    let { address, port } = agent.address();
    address = (address===("::"||"0.0.0.0") ? "localhost" : address);
    let addr = (agent instanceof Server ? "https" : "http") + "://" + address + ":" + port;
    routeAddr = addr + routes["calc"];
    console.log(routeAddr)
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(testData)
    };
    let res = await fetch(routeAddr, options);
    let status = res.status;
    let body = await res.json();
    expect(status).toBe(200);
    expectedResult.forEach((e)=> {
        expect(body).toHaveProperty(e)
    });
    new Promise((resolve) => {
        agent.closeAllConnections();
        agent.close(()=> {
            resolve();
        });
    });
});