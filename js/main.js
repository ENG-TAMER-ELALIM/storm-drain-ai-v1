// SELECT BUTTON

const calculateBtn = document.getElementById("calculateBtn");


// BUTTON EVENT

calculateBtn.addEventListener("click", function () {

    // NETWORK TYPE

const networkType =
    document.getElementById("networkType").value;
    
    // READ INPUT VALUES

    const rainfall =
        document.getElementById("rainfall").value;

    const area =
        document.getElementById("area").value;

    const runoff =
        document.getElementById("runoff").value;

    const slope =
        document.getElementById("slope").value;

    const manning =
        document.getElementById("manning").value;

    const pipeLength =
        document.getElementById("pipeLength").value;


    // PRINT VALUES TO CONSOLE

    console.log("Rainfall:", rainfall);

    console.log("Area:", area);

    console.log("Runoff:", runoff);

    console.log("Slope:", slope);

    console.log("Manning:", manning);

    // VALIDATE INPUTS

const validation =
    validateInputs(
        networkType,
        rainfall,
        area,
        runoff,
        slope,
        manning,
        pipeLength
    );


// STOP IF INVALID

if (!validation.valid) {

    alert(validation.message);

    return;

}

    // CALCULATE FLOW

const flow =
    calculateFlow(
        rainfall,
        area,
        runoff
    );


// PRINT FLOW

console.log("Flow:", flow);


// DISPLAY RESULT

document.getElementById("flowResult")
.innerText =
flow.toFixed(3) + " m³/s";


    // CALCULATE PIPE DIAMETER

const pipeDiameter =
    calculatePipeDiameter(
        flow,
        slope,
        manning,
        networkType
    );

// DISPLAY DIAMETER

document.getElementById("diameterResult")
.innerText =
pipeDiameter + " mm";


    // CALCULATE VELOCITY

const velocity =
    calculateVelocity(
        flow,
        pipeDiameter
    );


// DISPLAY VELOCITY

document.getElementById("velocityResult")
.innerText =
velocity.toFixed(2) + " m/s";

    
// CALCULATE MANHOLES

const manholeData =
    calculateManholes(
        networkType,
        pipeLength
    );


// DISPLAY MANHOLES

document.getElementById("manholeResult")
.innerText =
manholeData.count +
" MH";

    // CALCULATE DEPTH

const depth =
    calculateDepth(
        pipeLength,
        slope
    );


// DISPLAY DEPTH

document.getElementById("depthResult")
.innerText =
depth.toFixed(2) + " m";


// CLASSIFY DEPTH

const depthClass =
    classifyDepth(depth);


// DISPLAY CLASSIFICATION

document.getElementById("depthClassResult")
.innerText =
depthClass;

    // DETERMINE MANHOLE DIAMETER

const manholeDiameter =
    determineManholeDiameter(
        pipeDiameter
    );


// DISPLAY RESULT

document.getElementById("manholeDiameterResult")
.innerText =
manholeDiameter;

    // DETERMINE MANHOLE TYPE

const manholeType =
    determineManholeType(
        networkType,
        pipeDiameter,
        flow
    );


// DISPLAY RESULT

document.getElementById("manholeTypeResult")
.innerText =
manholeType;


    // CALCULATE CATCH BASINS

const basinData =
    calculateCatchBasins(
        flow,
        networkType
    );


// DISPLAY RESULT

document.getElementById("basinResult")
.innerText =
basinData.count +
" CB";

    
// DETERMINE INLET TYPE

const inletType =
    determineInletType(
        networkType
    );


// DISPLAY RESULT

document.getElementById("inletTypeResult")
.innerText =
inletType;

    // DETERMINE CB SIZE

const cbData =
    determineCatchBasinSize(
        flow
    );


// DISPLAY SIZE

document.getElementById(
    "cbSizeResult"
).innerText =
cbData.size;


// DISPLAY DEPTH

document.getElementById(
    "cbDepthResult"
).innerText =
cbData.depth;

    // DETERMINE CB SPACING

const spacingData =
    determineCatchBasinSpacing(
        networkType,
        pipeLength,
        basinData.count
    );


// DISPLAY SPACING

document.getElementById(
    "cbSpacingResult"
).innerText =
spacingData.spacing;


// DISPLAY STATUS

document.getElementById(
    "cbDistributionResult"
).innerText =
spacingData.status;


    // DETERMINE PUMP STATION

const pumpData =
    determinePumpStation(
        networkType,
        velocity,
        pipeLength,
        pipeDiameter
    );


// DISPLAY RESULTS

document.getElementById("pumpStationResult")
.innerText =
pumpData.station;


document.getElementById("pumpCountResult")
.innerText =
pumpData.pumps;

    // CALCULATE PUMP CAPACITY

const pumpCapacity =
    calculatePumpCapacity(
        flow,
        pumpData.pumps
    );


// DISPLAY RESULT

document.getElementById("pumpCapacityResult")
.innerText =
pumpCapacity.toFixed(3) +
" m³/s";

    
// DETERMINE STATION SIZE

const stationData =
    determinePumpStationSize(
        flow,
        pumpData.station
    );


// DISPLAY STATION TYPE

document.getElementById(
    "stationTypeResult"
).innerText =
stationData.type;


// DISPLAY WET WELL

document.getElementById(
    "wetWellResult"
).innerText =
stationData.wetWell;

// DETERMINE STATION LOCATION

const locationData =
    determinePumpLocation(
        networkType,
        slope,
        pipeLength,
        depth,
        pumpData.station
    );


// DISPLAY LOCATION

document.getElementById(
    "stationLocationResult"
).innerText =
locationData.location;


// DISPLAY REASON

document.getElementById(
    "placementReasonResult"
).innerText =
locationData.reason;

    // DETERMINE STORAGE LOGIC

const storageData =
    determineEmergencyStorage(
        stationData.type
    );


// DISPLAY STORAGE

document.getElementById(
    "storageResult"
).innerText =
storageData.storage;


// DISPLAY CYCLE

document.getElementById(
    "cycleResult"
).innerText =
storageData.cycle;


// DISPLAY OPERATION

document.getElementById(
    "operationResult"
).innerText =
storageData.operation;

    // DETERMINE PUMP LEVELS

const levelData =
    determinePumpLevels(
        stationData.type
    );


// DISPLAY START LEVEL

document.getElementById(
    "startLevelResult"
).innerText =
levelData.start;


// DISPLAY STOP LEVEL

document.getElementById(
    "stopLevelResult"
).innerText =
levelData.stop;


// DISPLAY ALARM LEVEL

document.getElementById(
    "alarmLevelResult"
).innerText =
levelData.alarm;


// DISPLAY OVERFLOW LEVEL

document.getElementById(
    "overflowLevelResult"
).innerText =
levelData.overflow;

    // AI OVERFLOW ANALYSIS

const riskData =
    analyzeOverflowRisk(
        stationData.type,
        levelData,
        storageData
    );


// DISPLAY SAFETY MARGIN

document.getElementById(
    "safetyMarginResult"
).innerText =
riskData.margin;


// DISPLAY OVERFLOW RISK

document.getElementById(
    "overflowRiskResult"
).innerText =
riskData.risk;


// DISPLAY STORAGE STATUS

document.getElementById(
    "storageStatusResult"
).innerText =
riskData.storage;
    
    // GENERATE RECOMMENDATIONS

const recommendation =
    generateRecommendations(
        velocity,
        pipeDiameter,
        networkType,
        depthClass,
        riskData.risk,
        riskData.storage,
        spacingData.status
    );

// DISPLAY RECOMMENDATIONS

document.getElementById("recommendationBox")
.innerText =
recommendation;

    // UPDATE SYSTEM STATUS

updateSystemStatus(
    velocity,
    pipeDiameter
);

});


// ============================================
// HYDRAULIC PROFILE DRAWING
// ============================================

function drawHydraulicProfile(
    pipeLength,
    depth,
    manholes,
    stationType,
    levelData
) {

    // SVG ELEMENT

    const svg =
        document.getElementById(
            "profileSVG"
        );


    // CLEAR OLD DRAWING

    svg.innerHTML = "";


    // BASIC DIMENSIONS

    const width = 1100;

    const startX = 80;

    const endX = 1000;

    const groundY = 100;

    const pipeY =
        groundY + (depth * 20);


    // =========================================
    // GROUND LINE
    // =========================================

    const groundLine = `
        <line
            x1="${startX}"
            y1="${groundY}"
            x2="${endX}"
            y2="${groundY}"
            stroke="#22C55E"
            stroke-width="4"
        />
    `;

    svg.innerHTML += groundLine;


    // GROUND LABEL

    svg.innerHTML += `
        <text
            x="${startX}"
            y="${groundY - 15}"
            fill="#22C55E"
            font-size="16"
        >
            Ground Level
        </text>
    `;


    // =========================================
    // PIPE LINE
    // =========================================

    svg.innerHTML += `
        <line
            x1="${startX}"
            y1="${pipeY}"
            x2="${endX}"
            y2="${pipeY}"
            stroke="#38BDF8"
            stroke-width="8"
        />
    `;


    // PIPE LABEL

    svg.innerHTML += `
        <text
            x="${startX}"
            y="${pipeY + 30}"
            fill="#38BDF8"
            font-size="16"
        >
            Pipe Invert
        </text>
    `;


    // =========================================
    // MANHOLES
    // =========================================

    const mhCount =
        parseInt(manholes);


    const spacing =
        (endX - startX) /
        (mhCount - 1);


    for (
        let i = 0;
        i < mhCount;
        i++
    ) {

        const x =
            startX + (i * spacing);


        svg.innerHTML += `
            <rect
                x="${x - 8}"
                y="${groundY}"
                width="16"
                height="${pipeY - groundY}"
                fill="#CBD5E1"
            />
        `;

    }


    // =========================================
    // WET WELL
    // =========================================

    if (
        stationType !==
        "No Station"
    ) {

        svg.innerHTML += `
            <rect
                x="${endX + 40}"
                y="${pipeY - 80}"
                width="70"
                height="120"
                fill="#1E293B"
                stroke="#F59E0B"
                stroke-width="4"
            />
        `;


        // LABEL

        svg.innerHTML += `
            <text
                x="${endX + 25}"
                y="${pipeY - 95}"
                fill="#F59E0B"
                font-size="16"
            >
                Wet Well
            </text>
        `;

    }


    // =========================================
    // ALARM LEVEL
    // =========================================

    if (
        levelData.alarm !== "--"
    ) {

        svg.innerHTML += `
            <line
                x1="${endX + 40}"
                y1="${pipeY - 30}"
                x2="${endX + 110}"
                y2="${pipeY - 30}"
                stroke="#EF4444"
                stroke-width="3"
                stroke-dasharray="6"
            />
        `;


        svg.innerHTML += `
            <text
                x="${endX + 120}"
                y="${pipeY - 25}"
                fill="#EF4444"
                font-size="14"
            >
                Alarm
            </text>
        `;

    }


    // =========================================
    // OVERFLOW LEVEL
    // =========================================

    if (
        levelData.overflow !== "--"
    ) {

        svg.innerHTML += `
            <line
                x1="${endX + 40}"
                y1="${pipeY - 60}"
                x2="${endX + 110}"
                y2="${pipeY - 60}"
                stroke="#DC2626"
                stroke-width="3"
            />
        `;


        svg.innerHTML += `
            <text
                x="${endX + 120}"
                y="${pipeY - 55}"
                fill="#DC2626"
                font-size="14"
            >
                Overflow
            </text>
        `;

    }

}


// DRAW HYDRAULIC PROFILE
drawHydraulicProfile(
    pipeLength,
    estimatedDepth,
    manholeCount,
    stationData.type,
    levelData
);


// ============================================
// SYSTEM STATUS UPDATE
// ============================================

function updateSystemStatus(
    status = "SYSTEM ONLINE"
) {

    const statusElement =
        document.querySelector(
            ".status-badge"
        );

    if (!statusElement) return;

    statusElement.innerText =
        status;

}
