// ============================================
// ENGINEERING RECOMMENDATIONS
// ============================================


function generateRecommendations(velocity) {

    // LOW VELOCITY

    if (velocity < 0.75) {

        return `
        WARNING:
        Flow velocity is too low.
        Risk of sedimentation and blockage.
        Consider reducing pipe diameter
        or increasing slope.
        `;
    }


    // HIGH VELOCITY

    else if (velocity > 5) {

        return `
        WARNING:
        Flow velocity is too high.
        Risk of pipe erosion and damage.
        Consider increasing pipe diameter
        or reducing slope.
        `;
    }


    // GOOD DESIGN

    else {

        return `
        DESIGN STATUS:
        Hydraulic velocity is within
        recommended engineering limits.
        System performance is acceptable.
        `;
    }

}
