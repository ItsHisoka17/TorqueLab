module.exports = function(req, res){
    let {h, t, w, d} = req.body;
    ((...args)=> {
        args.splice(3, 1).some((e)=> {
            if (e===null||typeof e !== "number") throw TypeError(`[${e}] is not a valid parameter`);
        });
    })(h, t, w, d);
    let driveTerrainFactor = {
        AWD: 0.92,
        RWD: 1.00,
        FWD: 1.08
    };
    if ("string"!==typeof d || !(driveTerrainFactor[d.toUpperCase()])) throw new TypeError(`[${d}] is not a valid parameter`);

    let torqueFactor = (1 - ((t/w) * 2.2));
    if (torqueFactor<0.88||torqueFactor>1.02){
        torqueFactor = torqueFactor < 0.88 ? 0.88 : 1.02;
    };
    let powerWeightRatio = w / h;

    let zeroToSixty = (powerWeightRatio ^ 0.33) * driveTerrainFactor[d] * torqueFactor * 2.8;
    let quarterMile = 5.825 * (w / h) ^ 0.333;
    quarterMile *= driveTerrainFactor[d];
    let trapSpeed = 234 * (h / w) ^ 0.333;

    return res.json({
        zeroToSixty,
        quarterMile,
        trapSpeed
    });
};