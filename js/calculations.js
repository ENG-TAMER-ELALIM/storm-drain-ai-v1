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
