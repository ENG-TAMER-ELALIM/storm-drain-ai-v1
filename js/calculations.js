// ============================================
// STORM DRAIN AI
// HYDRAULIC CALCULATIONS
// ============================================


// RATIONAL METHOD
// Q = 0.00278 * C * i * A


function calculateFlow(rainfall, area, runoff) {

    // CONVERT VALUES TO NUMBERS

    rainfall = Number(rainfall);

    area = Number(area);

    runoff = Number(runoff);


    // FLOW CALCULATION

    const flow =
        0.00278 * runoff * rainfall * area;


    // RETURN RESULT

    return flow;

}


// ============================================
// PIPE DIAMETER CALCULATION
// USING MANNING EQUATION
// ============================================


function calculatePipeDiameter(flow, slope, manning) {

    // CONVERT INPUTS

    flow = Number(flow);

    slope = Number(slope) / 100;

    manning = Number(manning);


    // STANDARD PIPE DIAMETERS (mm)

    const diameters = [
        150,
        200,
        250,
        300,
        375,
        450,
        525,
        600,
        750,
        900,
        1050,
        1200
    ];


    // LOOP THROUGH DIAMETERS

    for (let d of diameters) {

        // CONVERT TO METERS

        const D = d / 1000;


        // PIPE AREA

        const area =
            Math.PI * Math.pow(D, 2) / 4;


        // HYDRAULIC RADIUS
        // FULL FLOW PIPE

        const radius = D / 4;


        // MANNING FLOW

        const capacity =
            (1 / manning) *
            area *
            Math.pow(radius, 2 / 3) *
            Math.pow(slope, 1 / 2);


        // CHECK CAPACITY

        if (capacity >= flow) {

            return d;

        }

    }


    // ============================================
// FLOW VELOCITY CALCULATION
// ============================================


function calculateVelocity(flow, diameter) {

    // CONVERT TO METERS

    const D = diameter / 1000;


    // PIPE AREA

    const area =
        Math.PI * Math.pow(D, 2) / 4;


    // VELOCITY

    const velocity =
        flow / area;


    return velocity;

}


    // IF FLOW TOO HIGH

    return "Above 1200 mm";

}

