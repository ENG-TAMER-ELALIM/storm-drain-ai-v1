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

const estimatedDepth = depth;

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


    console.log(levelData);
    
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

    // ============================================
// DRAW HYDRAULIC PROFILE
// ============================================

drawHydraulicProfile(
    pipeLength,
    estimatedDepth,
    manholeData.count,
    stationData.type,
    levelData,
    flow
);

    
    drawNetworkLayout(

    networkType,

    manholeData.count,

   basinData.count,

    stationData.type

);

    // UPDATE SYSTEM STATUS

updateSystemStatus(
    velocity,
    pipeDiameter
);

});


// ============================================
// PROFESSIONAL HYDRAULIC PROFILE ENGINE
// ============================================

function drawHydraulicProfile(
    pipeLength,
    depth,
    manholes,
    stationType,
    levelData,
    flow
) {

    // SVG ELEMENT

    const svg =
        document.getElementById(
            "profileSVG"
        );

    // CLEAR OLD DRAWING

    svg.innerHTML = "";

    svg.setAttribute(
    "viewBox",
    "0 0 1200 700"
);


    // =========================================
    // BASIC LAYOUT
    // =========================================

    const startX = 100;

    const endX = 1050;

    const profileWidth =
        endX - startX;


    // =========================================
    // ENGINEERING SCALE
    // =========================================

    const verticalScale = 12;

    const totalDrop =
        pipeLength * 0.01;


    // =========================================
    // START LEVELS
    // =========================================

    const startGroundRL = 100;

    const endGroundRL =
        startGroundRL - totalDrop;


    // PIPE INVERT LEVELS

    const startInvertRL =
        startGroundRL - depth;

    const endInvertRL =
        endGroundRL - depth;


    // =========================================
    // SVG COORDINATES
    // =========================================

    const groundStartY = 100;

    const groundEndY =
        groundStartY +
        (totalDrop * verticalScale);


    const pipeStartY =
        groundStartY +
        (depth * verticalScale);


    const pipeEndY =
        groundEndY +
        (depth * verticalScale);


    // =========================================
// RL GRID SYSTEM
// =========================================

const topRL = 100;

const rlStep = 1;

const gridCount = 8;

for (let i = 0; i < gridCount; i++) {

    const rl =
        topRL - i;

    const y =
        60 + (i * 45);

    // GRID LINE

    svg.innerHTML += `
        <line
            x1="80"
            y1="${y}"
            x2="1120"
            y2="${y}"
            stroke="rgba(255,255,255,0.08)"
            stroke-width="1"
        />
    `;

    // RL LABEL

    svg.innerHTML += `
        <text
            x="20"
            y="${y + 5}"
            fill="#94A3B8"
            font-size="13"
            font-family="Arial"
        >
            ${rl.toFixed(2)}
        </text>
    `;
}
    // =========================================
    // GROUND PROFILE
    // =========================================

    svg.innerHTML += `
        <line
            x1="${startX}"
            y1="${groundStartY}"
            x2="${endX}"
            y2="${groundEndY}"
            stroke="#22C55E"
            stroke-width="5"
        />
    `;


    // LABEL

    svg.innerHTML += `
        <text
            x="${startX}"
            y="${groundStartY - 15}"
            fill="#22C55E"
            font-size="16"
            font-weight="bold"
        >
            Ground Profile
        </text>
    `;


    // =========================================
// PROFESSIONAL PIPE BARREL
// =========================================


// PIPE WALL THICKNESS

const pipeThickness = 26;


// TOP PIPE (CROWN)

const crownStartY =
    pipeStartY - (pipeThickness / 2);

const crownEndY =
    pipeEndY - (pipeThickness / 2);


// BOTTOM PIPE (INVERT)

const invertStartY =
    pipeStartY + (pipeThickness / 2);

const invertEndY =
    pipeEndY + (pipeThickness / 2);

    // =========================================
// HYDRAULIC GRADE LINE
// =========================================


// WATER DEPTH INSIDE PIPE

// =========================================
// DYNAMIC PIPE LOADING
// =========================================


// FLOW FACTOR

const flowFactor =
    Math.min(
       flow / 10,
        1.4
    );


// PIPE LOADING RATIO

const loadingRatio =
    0.35 + (flowFactor * 0.55);


// WATER DEPTH

const waterDepth =
    pipeThickness *
    loadingRatio;

// HGL LEVELS

// =========================================
// REALISTIC HGL POSITION
// =========================================


// NORMAL WATER LEVEL

const hglStartY =
    invertStartY -
    waterDepth;

const hglEndY =
    invertEndY -
    waterDepth;


// =========================================
// REALISTIC HGL CONSTRAINT
// =========================================


// KEEP HGL INSIDE PIPE

const finalHGLStartY =
    Math.min(
        hglStartY,
        invertStartY - 6
    );

const finalHGLEndY =
    Math.min(
        hglEndY,
        invertEndY - 6
    );


// PREVENT HGL ABOVE PIPE

const limitedHGLStartY =
    Math.max(
        finalHGLStartY,
        crownStartY + 6
    );

const limitedHGLEndY =
    Math.max(
        finalHGLEndY,
        crownEndY + 6
    );
    // =========================================
// SURCHARGE CONDITION
// =========================================

const surcharge =
    loadingRatio > 0.9;

     // =========================================
// REAL DYNAMIC HGL
// =========================================


// HGL OFFSET ABOVE INVERT

const hglOffset =
    pipeThickness *
    (0.15 + loadingRatio * 0.65);


// REAL HGL POSITION

const realisticHGLStartY =
    invertStartY - hglOffset;

const realisticHGLEndY =
    invertEndY - hglOffset;

    
   

// HGL COLOR

const hglColor =
    surcharge
        ? "#EF4444"
        : "#60A5FA";



// PIPE BODY

svg.innerHTML += `
    <polygon
        points="
            ${startX},${crownStartY}
            ${endX},${crownEndY}
            ${endX},${invertEndY}
            ${startX},${invertStartY}
        "
        fill="rgba(56,189,248,0.28)"
        stroke="#38BDF8"
        stroke-width="3"
    />
`;

    
// =========================================
// WATER INSIDE PIPE
// =========================================

svg.innerHTML += `
    <polygon
        points="
            ${startX},${realisticHGLStartY}
            ${endX},${realisticHGLEndY}
            ${endX},${invertEndY}
            ${startX},${invertStartY}
        "
        fill="rgba(59,130,246,0.35)"
    />
`;

// PIPE CENTER FLOW LINE

svg.innerHTML += `
    <line
        x1="${startX}"
        y1="${pipeStartY}"
        x2="${endX}"
        y2="${pipeEndY}"
        stroke="#7DD3FC"
        stroke-width="2"
        stroke-dasharray="10 6"
    />
`;



// DRAW HGL

svg.innerHTML += `
    <line
        x1="${startX}"
        y1="${realisticHGLStartY}"
        x2="${endX}"
        y2="${realisticHGLEndY}"
        stroke="${hglColor}"
        stroke-width="4"
        stroke-dasharray="14 8"
        opacity="0.95"
    />
`;


// HGL LABEL

svg.innerHTML += `
    <text
        x="${startX + 30}"
        y="${realisticHGLStartY - 12}"
        fill="${hglColor}"
        font-size="15"
        font-weight="bold"
    >
        HGL
    </text>
`;

    // =========================================
// FLOOD WARNING
// =========================================

if (surcharge) {

    svg.innerHTML += `
        <text
            x="${startX + 300}"
            y="${groundStartY - 40}"
            fill="#EF4444"
            font-size="22"
            font-weight="bold"
        >
            SURCHARGE CONDITION
        </text>
    `;

}


// PIPE LABEL

svg.innerHTML += `
    <text
        x="${startX}"
        y="${invertStartY + 35}"
        fill="#38BDF8"
        font-size="16"
        font-weight="bold"
    >
        Pipe Barrel
    </text>
`;

     
// =========================================
// MANHOLES
// =========================================

const mhCount = parseInt(manholes);

const mhSpacing =
    profileWidth / (mhCount - 1);

for (let i = 0; i < mhCount; i++) {

    const x =
        startX + (i * mhSpacing);

    const ratio =
        i / (mhCount - 1);

    const currentGroundY =
        groundStartY +
        ((groundEndY - groundStartY) * ratio);

    const currentPipeY =
        pipeStartY +
        ((pipeEndY - pipeStartY) * ratio);

    // =====================================
    // RL CALCULATIONS
    // =====================================

    const topRL =
        99.00;

    const groundRL =
        topRL - (ratio * 3.0);

    const invertRL =
        groundRL - 2.20;

    // =====================================
    // MANHOLE SHAFT
    // =====================================

    svg.innerHTML += `
        <rect
            x="${x - 8}"
            y="${currentGroundY}"
            width="16"
            height="${currentPipeY - currentGroundY}"
            fill="#CBD5E1"
            rx="2"
        />
    `;

    // =====================================
    // COVER SLAB
    // =====================================

    svg.innerHTML += `
        <rect
            x="${x - 14}"
            y="${currentGroundY - 6}"
            width="28"
            height="6"
            fill="#94A3B8"
        />
    `;

    // =====================================
    // MANHOLE ID
    // =====================================

    svg.innerHTML += `
        <text
            x="${x - 12}"
            y="${currentGroundY - 14}"
            fill="#FFFFFF"
            font-size="11"
            font-weight="bold"
        >
            MH${i + 1}
        </text>
    `;

   

}

    // =========================================
// PROFILE DATA TABLE
// =========================================

const tableY =
    Math.max(
        pipeEndY,
        groundEndY
    ) + 90;

svg.innerHTML += `
<text x="40" y="${tableY+15}"
fill="#FFFFFF"
font-size="11">
CHAINAGE
</text>

<text x="40" y="${tableY+35}"
fill="#22C55E"
font-size="11">
GROUND RL
</text>

<text x="40" y="${tableY+55}"
fill="#38BDF8"
font-size="11">
INVERT RL
</text>
`;

   for (let i = 0; i < mhCount; i++) {

    const x =
        startX + (i * mhSpacing);

    const ratio =
        i / (mhCount - 1);

    const groundRL =
        99 - (ratio * 3);

    const invertRL =
        groundRL - 2.2;

    const chainage =
        Math.round(
            ratio * pipeLength
        );

    svg.innerHTML += `

    <text
        x="${x - 15}"
        y="${tableY+15}"
        fill="#FFFFFF"
        font-size="10"
    >
        ${chainage}
    </text>

    <text
        x="${x - 15}"
        y="${tableY+35}"
        fill="#22C55E"
        font-size="10"
    >
        ${groundRL.toFixed(2)}
    </text>

    <text
        x="${x - 15}"
        y="${tableY+55}"
        fill="#38BDF8"
        font-size="10"
    >
        ${invertRL.toFixed(2)}
    </text>
    `;
}


    // =========================================
    // WET WELL
    // =========================================

    if (
        stationType !==
        "No Station"
    ) {

        const wellX =
            endX + 60;

        const wellTop =
            pipeEndY - 120;

        const wellHeight =
            160;


        // WELL STRUCTURE

        svg.innerHTML += `
            <rect
                x="${wellX}"
                y="${wellTop}"
                width="90"
                height="${wellHeight}"
                fill="#1E293B"
                stroke="#F59E0B"
                stroke-width="5"
                rx="4"
            />
        `;


        // WATER LEVEL

        svg.innerHTML += `
            <rect
                x="${wellX + 4}"
                y="${wellTop + 90}"
                width="82"
                height="66"
                fill="rgba(56,189,248,0.45)"
            />
        `;


        // TITLE

        svg.innerHTML += `
            <text
                x="${wellX - 10}"
                y="${wellTop - 18}"
                fill="#F59E0B"
                font-size="18"
                font-weight="bold"
            >
                Wet Well
            </text>
        `;


        // ALARM LEVEL

        svg.innerHTML += `
            <line
                x1="${wellX}"
                y1="${wellTop + 50}"
                x2="${wellX + 90}"
                y2="${wellTop + 50}"
                stroke="#EF4444"
                stroke-width="3"
                stroke-dasharray="6"
            />
        `;


        svg.innerHTML += `
            <text
                x="${wellX + 100}"
                y="${wellTop + 55}"
                fill="#EF4444"
                font-size="14"
            >
                Alarm
            </text>
        `;


        // OVERFLOW LEVEL

        svg.innerHTML += `
            <line
                x1="${wellX}"
                y1="${wellTop + 20}"
                x2="${wellX + 90}"
                y2="${wellTop + 20}"
                stroke="#DC2626"
                stroke-width="3"
            />
        `;


        svg.innerHTML += `
            <text
                x="${wellX + 100}"
                y="${wellTop + 25}"
                fill="#DC2626"
                font-size="14"
            >
                Overflow
            </text>
        `;

    }


    // =========================================
    // ENGINEERING INFO
    // =========================================

    svg.innerHTML += `
        <text
            x="80"
            y="370"
            fill="#94A3B8"
            font-size="15"
        >
            Pipe Length:
            ${pipeLength} m
        </text>
    `;


    svg.innerHTML += `
        <text
            x="350"
            y="370"
            fill="#94A3B8"
            font-size="15"
        >
            Estimated Depth:
            ${depth.toFixed(2)} m
        </text>
    `;


    svg.innerHTML += `
        <text
            x="700"
            y="370"
            fill="#94A3B8"
            font-size="15"
        >
            Manholes:
            ${mhCount}
        </text>
    `;

}





function drawNetworkLayout(
    networkType,
    manholes,
    catchBasins,
    stationType
) {

    manholes = parseInt(manholes);
    catchBasins = parseInt(catchBasins);

    const svg =
        document.getElementById(
            "networkSVG"
        );

    svg.innerHTML = "";

   const svgWidth = 1200;

const leftMargin = 120;

const rightMargin = 280;

const startX = leftMargin;

const startY = 250;

const availableWidth =
    svgWidth -
    leftMargin -
    rightMargin;
    
const spacing =
    manholes > 1
    ? availableWidth / (manholes - 1)
    : availableWidth;



    // =====================================
// MAIN PIPE
// =====================================

const endX =
    startX +
    ((manholes - 1) * spacing);
    

    console.log(
    "Network Layout OK",
    {
        manholes,
        spacing,
        endX
    }
);
    

svg.innerHTML += `
    <line
        x1="${startX}"
        y1="${startY}"
        x2="${endX}"
        y2="${startY}"
        stroke="#38BDF8"
        stroke-width="8"
        stroke-linecap="round"
    />
`;

    // =====================================
// FLOW ARROWS
// =====================================

for(let i = 0; i < manholes - 1; i++){

    const arrowX =
        startX +
        (i * spacing) +
        (spacing / 2);

    svg.innerHTML += `
        <polygon
            points="
                ${arrowX},${startY-8}
                ${arrowX+18},${startY}
                ${arrowX},${startY+8}
            "
            fill="#22C55E"
        />
    `;
}

    // =====================================
// FLOW LABEL
// =====================================

svg.innerHTML += `
    <text
        x="${startX + 250}"
        y="${startY - 40}"
        fill="#22C55E"
        font-size="14"
        font-weight="bold"
    >
        Flow Direction →
    </text>
`;

 // =====================================
// MANHOLES
// =====================================

const nodes = [];

for(let i=0;i<manholes;i++){

    const x =
        startX +
        (i * spacing);

    const y =
        startY;

    nodes.push({
        x,
        y
    });

    svg.innerHTML += `
        <circle
            cx="${x}"
            cy="${y}"
            r="18"
            fill="#CBD5E1"
            stroke="#475569"
            stroke-width="4"
        />
    `;

    svg.innerHTML += `
        <text
            x="${x-14}"
            y="${y-28}"
            fill="#FFFFFF"
            font-size="12"
            font-weight="bold"
        >
            MH${i+1}
        </text>
    `;
}

    for(let i=0;i<nodes.length-1;i++){

    const pipeX =
        (nodes[i].x + nodes[i+1].x)/2;

    svg.innerHTML += `
        <text
            x="${pipeX-25}"
            y="${startY+55}"
            fill="#38BDF8"
            font-size="10"
        >
            DN900
        </text>
    `;

    svg.innerHTML += `
        <text
            x="${pipeX-20}"
            y="${startY+70}"
            fill="#94A3B8"
            font-size="9"
        >
            S=0.70%
        </text>
    `;
}

   // =====================================
// REALISTIC CATCH BASINS
// =====================================

for(let i=0;i<nodes.length-1;i++){

    const cbX =
        (nodes[i].x + nodes[i+1].x)/2;

    const cbY =
        startY - 110;

    // Catch Basin

    svg.innerHTML += `
        <rect
            x="${cbX-10}"
            y="${cbY-10}"
            width="20"
            height="20"
            fill="#F59E0B"
            stroke="#FFFFFF"
            stroke-width="2"
        />
    `;

    // Lateral Connection

    svg.innerHTML += `
        <line
            x1="${cbX}"
            y1="${cbY+10}"
            x2="${nodes[i+1].x}"
            y2="${startY}"
            stroke="#94A3B8"
            stroke-width="3"
            stroke-dasharray="6,6"
        />
    `;

    // Label

    svg.innerHTML += `
        <text
            x="${cbX-12}"
            y="${cbY-18}"
            fill="#F59E0B"
            font-size="10"
            font-weight="bold"
        >
            CB${i+1}
        </text>
    `;
}

    // =====================================
// PUMP STATION
// =====================================

const pumpX =
    endX + 80;
const pumpY =
    startY;

    // =====================================
// CONNECTION TO WET WELL
// =====================================

svg.innerHTML += `
<line
    x1="${nodes[nodes.length - 1].x}"
    y1="${startY}"
    x2="${pumpX}"
    y2="${startY}"
    stroke="#38BDF8"
    stroke-width="8"
    stroke-linecap="round"
/>
`;


// Wet Well

svg.innerHTML += `
<rect
    x="${pumpX}"
    y="${pumpY - 45}"
    width="50"
    height="90"
    fill="#1E293B"
    stroke="#F59E0B"
    stroke-width="4"
    rx="6"
/>
`;


// Water Level

svg.innerHTML += `
<rect
    x="${pumpX + 4}"
    y="${pumpY}"
    width="42"
    height="40"
    fill="#38BDF8"
    opacity="0.6"
/>
`;

    // =====================================
// START LEVEL
// =====================================

svg.innerHTML += `
<line
    x1="${pumpX + 4}"
    y1="${pumpY - 8}"
    x2="${pumpX + 46}"
    y2="${pumpY - 8}"
    stroke="#22C55E"
    stroke-width="2"
/>
`;

svg.innerHTML += `
<text
    x="${pumpX + 8}"
    y="${pumpY - 12}"
    fill="#22C55E"
    font-size="8"
    font-weight="bold"
>
    START
</text>
`;


// Pump Symbol 1

svg.innerHTML += `
<circle
    cx="${pumpX + 18}"
    cy="${pumpY - 12}"
    r="8"
    fill="#22C55E"
/>
`;


// Pump Symbol 2

svg.innerHTML += `
<circle
    cx="${pumpX + 34}"
    cy="${pumpY - 12}"
    r="8"
    fill="#22C55E"
/>
`;


// Title

svg.innerHTML += `
<text
    x="${pumpX - 10}"
    y="${pumpY - 60}"
    fill="#F59E0B"
    font-size="14"
    font-weight="bold"
>
    Pump Station
</text>
`;

    // =====================================
// RISING MAIN
// =====================================

svg.innerHTML += `
<line
    x1="${pumpX + 50}"
    y1="${pumpY - 12}"
    x2="${pumpX + 170}"
    y2="${pumpY - 12}"
    stroke="#22C55E"
    stroke-width="6"
/>
`;

svg.innerHTML += `
<polygon
    points="
    ${pumpX+170},${pumpY-20}
    ${pumpX+190},${pumpY-12}
    ${pumpX+170},${pumpY-4}
    "
    fill="#22C55E"
/>
`;

    // =====================================
// OUTFALL
// =====================================

const outfallX =
    pumpX + 210;

svg.innerHTML += `
<rect
    x="${outfallX}"
    y="${pumpY - 25}"
    width="35"
    height="50"
    fill="#475569"
    stroke="#FFFFFF"
    stroke-width="2"
/>
`;

svg.innerHTML += `
<text
    x="${outfallX - 10}"
    y="${pumpY - 40}"
    fill="#FFFFFF"
    font-size="12"
>
    OUTFALL
</text>
`;
}


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

