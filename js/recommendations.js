// ============================================
// PROFESSIONAL AI RECOMMENDATION ENGINE
// ============================================

function generateRecommendations(

    velocity,
    depth,
    stationType,
    flow,
    diameter

) {

    // LOW VELOCITY

    if (velocity < 0.6) {

        return `
        WARNING:

        Flow velocity is too low.

        Risk of sedimentation and blockage.

        Recommendation:
        Increase slope or reduce pipe diameter.
        `;

    }


    // HIGH VELOCITY

    if (velocity > 3.5) {

        return `
        WARNING:

        Hydraulic velocity is excessive.

        Risk of pipe erosion and turbulence.

        Recommendation:
        Add drop structures or energy dissipation.
        `;

    }


    // VERY DEEP SYSTEM

    if (depth > 8) {

        return `
        DEEP NETWORK WARNING:

        Excavation depth is very high.

        Recommendation:
        Evaluate intermediate lift station
        or optimize network alignment.
        `;

    }


    // LARGE FLOW

    if (flow > 5) {

        return `
        HIGH FLOW SYSTEM:

        Major stormwater collector detected.

        Recommendation:
        Verify hydraulic grade line (HGL)
        and surcharge conditions.
        `;

    }


    // PUMP STATION

    if (stationType !== "No Station") {

        return `
        PUMP STATION ACTIVE:

        Pump station operation required.

        Recommendation:
        Monitor wet well levels,
        pump cycling,
        and emergency overflow conditions.
        `;

    }


    // NORMAL CONDITION

    return `
    DESIGN STATUS:

    Hydraulic velocity is within
    acceptable engineering limits.

    System hydraulic performance
    is acceptable.
    `;

}
