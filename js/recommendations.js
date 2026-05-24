// ============================================
// ENGINEERING RECOMMENDATIONS
// ============================================

function generateRecommendations(
    velocity,
    pipeDiameter,
    networkType
) {

    // INVALID VALUES

    if (
        isNaN(velocity) ||
        velocity <= 0
    ) {

        return `
        No hydraulic analysis available.

        Please enter valid project data.
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
