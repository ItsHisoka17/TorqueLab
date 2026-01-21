module.exports = function({message, status}, req, res){
    res.status(status)
    .json({
        error: message,
        status
    });
    console.log(message)
};