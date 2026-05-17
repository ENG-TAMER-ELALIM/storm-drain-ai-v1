// ============================================
// ENGINEERING RECOMMENDATIONS
// ============================================

function generateRecommendations(
    velocity
) {

    // INVALID VALUE

    if (
        isNaN(velocity) ||
        velocity <= 0
    ) {

        return `
        No hydraulic analysis available.
        Please enter valid project data.
        `;

    }


    // LOW VELOCITY

    if (velocity < 0.75) {

        return `
        WARNING:
        Flow velocity is too low.

        Risk of sedimentation and blockage.

        Recommendation:
        Reduce pipe diameter or increase slope.
        `;

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


    // GOOD DESIGN

    else {

        return `
        DESIGN STATUS:

        Hydraulic velocity is within
        acceptable engineering limits.

        System performance is acceptable.
        `;

    }

}
