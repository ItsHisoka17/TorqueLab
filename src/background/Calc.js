module.exports = function(req, res){
    let {h, t, w} = req.body;
    ((...args)=> {
        args.splice(2, 1).some((e)=> {
            if (e===null||typeof e !== "number") throw TypeError(`[${e}] is not a valid parameter`);
        });
    })(h, t, w);
    let driveTerrainFactor = {
        AWD: 0.92,
        RWD: 1.00,
        FWD: 1.08
    };
    d = d.toUpperCase();
    if ("string"!==typeof d || !(d in driveTerrainFactor)) throw new TypeError(`[${d}] is not a valid parameter`);

    let torqueFactor = (1 - ((t/w) * 2.2));
    if (torqueFactor<0.88||torqueFactor>1.02){
        torqueFactor = torqueFactor < 0.88 ? 0.88 : 1.02;
    };
    let powerWeightRatio = w / h;

    let zeroToSixty = Math.pow(powerWeightRatio, 0.33) * driveTerrainFactor[d] * torqueFactor * 2.8;
    let quarterMile = 5.825 * Math.pow((w / h), 0.333);
    quarterMile *= driveTerrainFactor[d];
    let trapSpeed = 234 * Math.pow((h / w), 0.333);

    return res.json({
        zeroToSixty,
        quarterMile,
        trapSpeed
    });
};