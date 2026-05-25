// ============================================
// STORM DRAIN AI
// HYDRAULIC CALCULATIONS
// ============================================


// ============================================
// RATIONAL METHOD
// Q = 0.00278 * C * i * A
// ============================================

function calculateFlow(rainfall, area, runoff) {

    // CONVERT VALUES TO NUMBERS

    rainfall = Number(rainfall);
    area = Number(area);
    runoff = Number(runoff);


    // FLOW CALCULATION

    const flow =
        0.00278 * runoff * rainfall * area;


    return flow;

}


// ============================================
// PIPE DIAMETER CALCULATION
// USING MANNING EQUATION
// ============================================

function calculatePipeDiameter(
    flow,
    slope,
    manning,
    networkType
) {

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
    // MINIMUM DIAMETER

let minimumDiameter = 300;


// NETWORK RULES

if (networkType === "secondary") {

    minimumDiameter = 450;

}

else if (networkType === "main") {

    minimumDiameter = 600;

}


    // LOOP THROUGH DIAMETERS

    for (let d of diameters) {

        // CONVERT TO METERS

        const D = d / 1000;

        // SKIP SMALL DIAMETERS

if (d < minimumDiameter) {

    continue;

}


        // PIPE AREA

        const area =
            Math.PI * Math.pow(D, 2) / 4;


        // HYDRAULIC RADIUS

        const radius = D / 4;


        // MANNING FLOW CAPACITY

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


    // IF FLOW TOO HIGH

    return "Above 1200 mm";

}


// ============================================
// FLOW VELOCITY CALCULATION
// ============================================

function calculateVelocity(flow, diameter) {

    // INVALID DIAMETER

if (
    typeof diameter !== "number"
) {

    return 0;

}
    
    // CONVERT DIAMETER TO METERS

    const D = diameter / 1000;


    // PIPE AREA

    const area =
        Math.PI * Math.pow(D, 2) / 4;


    // VELOCITY

    const velocity =
        flow / area;


    return velocity;

}



// ============================================
// MANHOLE CALCULATION
// ============================================

function calculateManholes(
    networkType,
    pipeLength
) {

    // CONVERT TO NUMBER

    pipeLength = Number(pipeLength);


    // DEFAULT SPACING

    let spacing = 50;


    // NETWORK TYPE RULES

    if (networkType === "internal") {

        spacing = 50;

    }

    else if (networkType === "secondary") {

        spacing = 80;

    }

    else if (networkType === "main") {

        spacing = 120;

    }


    // CALCULATE MANHOLES

    const manholes =
        Math.ceil(pipeLength / spacing) + 1;


    // RETURN RESULTS

    return {
        spacing: spacing,
        count: manholes
    };

}


// ============================================
// CATCH BASIN CALCULATION
// ============================================

function calculateCatchBasins(
    flow,
    networkType
) {

    // CONVERT FLOW TO L/s

    const flowLS =
        flow * 1000;


    // DEFAULT INLET CAPACITY

    let inletCapacity = 30;


    // NETWORK RULES

    if (networkType === "secondary") {

        inletCapacity = 50;

    }

    else if (networkType === "main") {

        inletCapacity = 80;

    }


    // CALCULATE NUMBER OF BASINS

    const basins =
        Math.ceil(
            flowLS / inletCapacity
        );


    // RETURN RESULTS

    return {
        count: basins,
        capacity: inletCapacity
    };

}


// ============================================
// INLET TYPE SELECTION
// ============================================

function determineInletType(
    networkType
) {

    // INTERNAL DRAINAGE

    if (networkType === "internal") {

        return "Grated Inlet";

    }


    // SECONDARY COLLECTOR

    else if (
        networkType === "secondary"
    ) {

        return "Combination Inlet";

    }


    // MAIN TRUNK

    else if (
        networkType === "main"
    ) {

        return "Curb + Sag Inlet";

    }


    // DEFAULT

    return "Standard Inlet";

}


// ============================================
// PUMP STATION DECISION
// ============================================

function determinePumpStation(
    networkType,
    velocity,
    pipeLength,
    pipeDiameter
) {

    // CONVERT LENGTH

    pipeLength = Number(pipeLength);


    // DEFAULT RESULT

    let stationRequired = "Not Required";

    let pumps = 0;

    // LARGE FLOW CONDITION

if (
    typeof pipeDiameter !== "number"
) {

    stationRequired =
        "Major Pump Station Required";

    pumps = 3;

}


    // SECONDARY COLLECTOR

    if (
        networkType === "secondary" &&
        velocity < 0.75
    ) {

        stationRequired = "Required";

        pumps = 2;

    }


    // MAIN TRUNK

    if (
        networkType === "main" &&
        (
            velocity < 0.75 ||
            pipeLength > 1000
        )
    ) {

        stationRequired = "Required";

        pumps = 3;

    }


    // RETURN RESULTS

    return {

        station: stationRequired,

        pumps: pumps

    };

}


// ============================================
// PUMP CAPACITY CALCULATION
// ============================================

function calculatePumpCapacity(
    flow,
    pumps
) {

    // NO PUMPS

    if (pumps === 0) {

        return 0;

    }


    // NUMBER OF DUTY PUMPS

    let dutyPumps = 1;


    // LARGE STATION

    if (pumps >= 3) {

        dutyPumps = 2;

    }


    // PUMP CAPACITY

    const capacity =
        flow / dutyPumps;


    return capacity;

}


// ============================================
// MANHOLE DIAMETER SELECTION
// ============================================

function determineManholeDiameter(
    pipeDiameter
) {

    // INVALID PIPE

    if (
        typeof pipeDiameter !== "number"
    ) {

        return "Special Structure";

    }


    // SMALL PIPE

    if (pipeDiameter <= 450) {

        return "1200 mm";

    }


    // MEDIUM PIPE

    else if (pipeDiameter <= 900) {

        return "1500 mm";

    }


    // LARGE PIPE

    else {

        return "1800 mm";

    }

}


// ============================================
// MANHOLE TYPE SELECTION
// ============================================

function determineManholeType(
    networkType,
    pipeDiameter,
    flow
) {

    // SPECIAL STRUCTURE

    if (
        typeof pipeDiameter !== "number"
    ) {

        return "Special Chamber";

    }


    // LARGE FLOW

    if (flow > 5) {

        return "Deep Junction MH";

    }


    // INTERNAL DRAINAGE

    if (networkType === "internal") {

        return "Inspection MH";

    }


    // SECONDARY COLLECTOR

    if (
        networkType === "secondary"
    ) {

        return "Junction MH";

    }


    // MAIN TRUNK

    if (
        networkType === "main"
    ) {

        return "Main Trunk MH";

    }


    // DEFAULT

    return "Standard MH";

}


// ============================================
// MANHOLE DEPTH CALCULATION
// ============================================

function calculateDepth(
    pipeLength,
    slope
) {

    // CONVERT VALUES

    pipeLength = Number(pipeLength);

    slope = Number(slope) / 100;


    // DEPTH

    const depth =
        pipeLength * slope;


    return depth;

}



// ============================================
// DEPTH CLASSIFICATION
// ============================================

function classifyDepth(depth) {

    // SHALLOW

    if (depth < 1.5) {

        return "Shallow MH";

    }


    // STANDARD

    else if (depth <= 4) {

        return "Standard MH";

    }


    // DEEP

    else if (depth <= 6) {

        return "Deep MH";

    }


    // CRITICAL

    else {

        return "Critical Deep Structure";

    }

}


// ============================================
// CATCH BASIN SIZE SELECTION
// ============================================

function determineCatchBasinSize(
    flow
) {

    // CONVERT FLOW TO L/s

    const flowLs =
        flow * 1000;


    // FLOW PER BASIN

    const basinFlow =
        flowLs / 10;


    // SMALL CB

    if (basinFlow <= 30) {

        return {

            size: "600 x 600 mm",

            depth: "1.2 m",

            type: "Small CB"

        };

    }


    // MEDIUM CB

    else if (basinFlow <= 60) {

        return {

            size: "900 x 900 mm",

            depth: "1.5 m",

            type: "Medium CB"

        };

    }


    // LARGE CB

    else {

        return {

            size: "1200 x 1200 mm",

            depth: "1.8 m",

            type: "Large CB"

        };

    }

}



// ============================================
// PUMP STATION SIZING
// ============================================

function determinePumpStationSize(
    flow,
    stationRequired
) {

    // NO STATION

    if (
        stationRequired ===
        "Not Required"
    ) {

        return {

            type: "No Station",

            wetWell: "--"

        };

    }


    // SMALL STATION

    if (flow < 1) {

        return {

            type: "Small Station",

            wetWell: "2 x 2 x 3 m"

        };

    }


    // MEDIUM STATION

    else if (flow <= 5) {

        return {

            type: "Medium Station",

            wetWell: "4 x 4 x 4 m"

        };

    }


    // MAJOR STATION

    else {

        return {

            type: "Major Station",

            wetWell: "6 x 6 x 6 m"

        };

    }

}


// ============================================
// PUMP STATION LOCATION LOGIC
// ============================================

function determinePumpLocation(
    networkType,
    slope,
    pipeLength,
    depth,
    stationRequired
) {

    // NO STATION

    if (
        stationRequired ===
        "Not Required"
    ) {

        return {

            location: "--",

            reason:
                "Gravity flow is sufficient."

        };

    }


    // CONVERT VALUES

    slope = Number(slope);

    pipeLength =
        Number(pipeLength);


    // DEEP EXCAVATION

    if (depth > 6) {

        return {

            location:
                "Deep Sump Zone",

            reason:
                "Excessive excavation depth."

        };

    }


    // FLAT TERRAIN

    if (slope < 0.5) {

        return {

            location:
                "Main Low Point",

            reason:
                "Insufficient gravity slope."

        };

    }


    // LONG COLLECTOR

    if (pipeLength > 1000) {

        return {

            location:
                "End of Collector",

            reason:
                "Long transmission distance."

        };

    }


    // MAIN TRUNK

    if (networkType === "main") {

        return {

            location:
                "Central Trunk Station",

            reason:
                "Main trunk flow collection."

        };

    }


    // DEFAULT

    return {

        location:
            "Network Outlet",

        reason:
            "Standard drainage collection."

    };

}


// ============================================
// CATCH BASIN SPACING LOGIC
// ============================================

function determineCatchBasinSpacing(
    networkType,
    pipeLength,
    basinCount
) {

    // INVALID VALUES

    if (
        basinCount <= 0
    ) {

        return {

            spacing: "--",

            status:
                "No Catch Basins"

        };

    }


    // CONVERT VALUES

    pipeLength =
        Number(pipeLength);


    // CALCULATE SPACING

    const spacing =
        pipeLength / basinCount;


    // MAXIMUM ALLOWABLE

    let maxSpacing = 30;


    // SECONDARY

    if (
        networkType ===
        "secondary"
    ) {

        maxSpacing = 50;

    }


    // MAIN

    if (
        networkType ===
        "main"
    ) {

        maxSpacing = 75;

    }


    // STATUS

    let status =
        "Distribution Acceptable";


    // EXCESSIVE SPACING

    if (
        spacing > maxSpacing
    ) {

        status =
            "Flooding Risk - Reduce Spacing";

    }


    // RETURN RESULTS

    return {

        spacing:
            spacing.toFixed(1) + " m",

        status: status

    };

}


// ============================================
// EMERGENCY STORAGE LOGIC
// ============================================

function determineEmergencyStorage(
    stationType
) {

    // NO STATION

    if (
        stationType ===
        "No Station"
    ) {

        return {

            storage: "--",

            cycle: "--",

            operation:
                "Gravity Flow"

        };

    }


    // SMALL STATION

    if (
        stationType ===
        "Small Station"
    ) {

        return {

            storage: "15 m³",

            cycle: "10 min",

            operation:
                "Duty / Standby"

        };

    }


    // MEDIUM STATION

    if (
        stationType ===
        "Medium Station"
    ) {

        return {

            storage: "50 m³",

            cycle: "15 min",

            operation:
                "Alternating Pumps"

        };

    }


    // MAJOR STATION

    return {

        storage: "150 m³",

        cycle: "20 min",

        operation:
            "Sequenced Multi-Pump"

    };

}
