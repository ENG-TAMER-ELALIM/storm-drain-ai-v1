// ============================================
// ENGINEERING RECOMMENDATIONS
// ============================================

function generateRecommendations(
    velocity,
    pipeDiameter,
    networkType
) {

    // INVALID ANALYSIS

if (isNaN(velocity)) {

    return `
    No hydraulic analysis available.

    Please enter valid project data.
    `;

}


// MEGA FLOW CONDITION

if (
    velocity === 0 &&
    typeof pipeDiameter !== "number"
) {

    return `
    CRITICAL DESIGN CONDITION:

    Hydraulic flow exceeds
    the standard pipe range.

    Major stormwater infrastructure
    is required.

    Recommended Solutions:

    • Parallel Pipe System

    • RC Box Culvert

    • Large Trunk Drainage

    • Major Pump Station

    • Advanced Hydraulic Modeling
    `;

}


    // MINIMUM DIAMETERS

    let minimumDiameter = 300;


    if (networkType === "secondary") {

        minimumDiameter = 450;

    }

    else if (networkType === "main") {

        minimumDiameter = 600;

    }


    // LOW VELOCITY

    if (velocity < 0.75) {

        // MINIMUM DIAMETER REACHED

        if (pipeDiameter <= minimumDiameter) {

            return `
            WARNING:

            Flow velocity is too low.

            Risk of sedimentation and blockage.

            Pipe diameter is already at the
            minimum allowed design standard.

            Recommendation:

            Increase pipe slope or reconsider
            network classification.
            `;

        }


        // DIAMETER CAN BE REDUCED

        else {

            return `
            WARNING:

            Flow velocity is too low.

            Risk of sedimentation and blockage.

            Recommendation:

            Reduce pipe diameter or increase slope.
            `;

        }

    }


    // HIGH VELOCITY

    else if (velocity > 5) {

        return `
        WARNING:

        Flow velocity is too high.

        Risk of erosion and pipe damage.

        Recommendation:

        Increase pipe diameter or reduce slope.
        `;

    }


    // ACCEPTABLE DESIGN

    else {

        return `
        DESIGN STATUS:

        Hydraulic velocity is within
        acceptable engineering limits.

        System performance is acceptable.
        `;

    }

}


// ============================================
// SYSTEM STATUS ENGINE
// ============================================

function updateSystemStatus(
    velocity,
    pipeDiameter
) {

    const status =
        document.getElementById(
            "systemStatus"
        );


    // RESET

    status.className =
        "recommendation-status";


    // CRITICAL

    if (
        typeof pipeDiameter !== "number"
    ) {

        status.innerText =
            "CRITICAL CAPACITY";

        status.classList.add(
            "status-critical"
        );

        return;

    }


    // WARNING

    if (
        velocity < 0.75 ||
        velocity > 5
    ) {

        status.innerText =
            "WARNING CONDITION";

        status.classList.add(
            "status-warning"
        );

        return;

    }


    // SAFE

    status.innerText =
        "HYDRAULIC SAFE";

    status.classList.add(
        "status-safe"
    );

}
