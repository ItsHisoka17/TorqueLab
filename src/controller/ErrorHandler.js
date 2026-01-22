/**
 * @param {import ("../../typings/Typings").ErrorParams} {message, status} 
 * @param {import ("../../typings/Typings").Request} req
 * @param {import ("../../typings/Typings").Response} res
 */

module.exports = function({message, status}, req, res){
    res.status(status)
    .json({
        error: message,
        status
    });
    console.log(message)
};