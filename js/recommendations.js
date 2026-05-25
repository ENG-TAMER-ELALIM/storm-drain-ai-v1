// ============================================
// ADVANCED AI RECOMMENDATION ENGINE
// ============================================

function generateRecommendations(
    velocity,
    pipeDiameter,
    networkType,
    depthClass,
    overflowRisk,
    storageStatus,
    cbStatus
) {

    // FINAL MESSAGE

    let message = "";


    // =========================================
    // CRITICAL HYDRAULIC CAPACITY
    // =========================================

    if (
        typeof pipeDiameter !== "number"
    ) {

        message += `
CRITICAL HYDRAULIC CONDITION:

Flow exceeds standard pipe capacity.

Recommended Actions:

• Consider box culvert system
• Use parallel trunk pipes
• Add major pump station
• Perform advanced hydraulic modeling

`;

    }


    // =========================================
    // VELOCITY ANALYSIS
    // =========================================

    if (velocity < 0.75) {

        message += `
LOW VELOCITY WARNING:

Risk of sedimentation and blockage.

Recommendations:

• Increase pipe slope
• Review network classification
• Improve hydraulic gradient

`;

    }


    else if (velocity > 5) {

        message += `
HIGH VELOCITY WARNING:

Risk of pipe erosion.

Recommendations:

• Increase pipe diameter
• Reduce hydraulic slope
• Install energy dissipation structures

`;

    }


    else {

        message += `
HYDRAULIC PERFORMANCE:

Velocity within acceptable limits.

`;

    }


    // =========================================
    // DEPTH ANALYSIS
    // =========================================

    if (
        depthClass ===
        "Critical Deep Structure"
    ) {

        message += `
DEEP EXCAVATION ALERT:

Excessive excavation depth detected.

Recommendations:

• Consider intermediate pump station
• Reduce trench depth
• Review pipe routing

`;

    }


    else if (
        depthClass ===
        "Deep MH"
    ) {

        message += `
DEEP MANHOLE CONDITION:

Deep access structure required.

Recommendations:

• Provide access safety systems
• Verify excavation stability

`;

    }


    // =========================================
    // OVERFLOW RISK
    // =========================================

    if (
        overflowRisk ===
        "Critical Overflow Risk"
    ) {

        message += `
CRITICAL FLOOD RISK:

Overflow potential detected.

Recommendations:

• Increase emergency storage
• Add standby pumping capacity
• Install overflow protection systems

`;

    }


    else if (
        overflowRisk ===
        "Moderate Flood Risk"
    ) {

        message += `
MODERATE FLOOD RISK:

Limited hydraulic safety margin.

Recommendations:

• Monitor wet well levels
• Improve storage capacity

`;

    }


    // =========================================
    // STORAGE STATUS
    // =========================================

    if (
        storageStatus ===
        "Limited Emergency Buffer"
    ) {

        message += `
LIMITED STORAGE WARNING:

Emergency storage capacity is limited.

Recommendations:

• Increase wet well volume
• Improve emergency retention

`;

    }


    // =========================================
    // CB DISTRIBUTION
    // =========================================

    if (
        cbStatus ===
        "Flooding Risk - Reduce Spacing"
    ) {

        message += `
SURFACE DRAINAGE WARNING:

Catch basin spacing is excessive.

Recommendations:

• Reduce inlet spacing
• Add additional catch basins
• Improve surface collection efficiency

`;

    }


    // =========================================
    // SAFE SYSTEM
    // =========================================

    if (
        message.includes("WARNING") === false &&
        message.includes("RISK") === false &&
        message.includes("ALERT") === false &&
        message.includes("CRITICAL") === false
    ) {

        message += `
FINAL STATUS:

System hydraulic and operational
performance acceptable.

No critical engineering risks detected.

`;

    }


    return message;

}
