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
    // BACKGROUND GRID
    // =========================================

    for (let i = 0; i < 10; i++) {

        const y =
            60 + (i * 35);

        svg.innerHTML += `
            <line
                x1="60"
                y1="${y}"
                x2="1120"
                y2="${y}"
                stroke="rgba(255,255,255,0.05)"
                stroke-width="1"
            />
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

console.log("Flow =", flow);
console.log("Flow Factor =", flowFactor);


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

    const mhCount =
        parseInt(manholes);

    const mhSpacing =
        profileWidth / (mhCount - 1);


    for (let i = 0; i < mhCount; i++) {

        const x =
            startX + (i * mhSpacing);


        // INTERPOLATION

        const ratio =
            i / (mhCount - 1);


        const currentGroundY =
            groundStartY +
            (
                (groundEndY - groundStartY)
                * ratio
            );


        const currentPipeY =
            pipeStartY +
            (
                (pipeEndY - pipeStartY)
                * ratio
            );


        // MANHOLE SHAFT

        svg.innerHTML += `
            <rect
                x="${x - 8}"
                y="${currentGroundY}"
                width="16"
                height="${
                    currentPipeY -
                    currentGroundY
                }"
                fill="#CBD5E1"
                rx="2"
            />
        `;


        // COVER SLAB

        svg.innerHTML += `
            <rect
                x="${x - 14}"
                y="${currentGroundY - 6}"
                width="28"
                height="6"
                fill="#94A3B8"
            />
        `;


        // MANHOLE LABEL

        svg.innerHTML += `
            <text
                x="${x - 12}"
                y="${currentGroundY - 12}"
                fill="#E2E8F0"
                font-size="11"
            >
                MH${i + 1}
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



// ============================================
// drawNetworkLayout
// ============================================



function drawNetworkLayout(
    networkType,
    manholes,
    catchBasins,
    stationType
) {

    const svg =
        document.getElementById(
            "networkSVG"
        );

    svg.innerHTML = "";

    const startX = 120;
    const startY = 250;

    const spacing =
    Math.min(
        90,
        availableWidth /
        (manholes + 1)
    );

    // MAIN PIPE

    svg.innerHTML += `
        <line
            x1="${startX}"
            y1="${startY}"
            x2="${startX + (manholes-1)*spacing}"
            y2="${startY}"
            stroke="#38BDF8"
            stroke-width="8"
        />
    `;

    // MANHOLES

    for(let i=0;i<manholes;i++){

        const x =
            startX +
            (i*spacing);

        svg.innerHTML += `
            <circle
                cx="${x}"
                cy="${startY}"
                r="16"
                fill="#CBD5E1"
                stroke="#475569"
                stroke-width="3"
            />
        `;

        svg.innerHTML += `
            <text
                x="${x-12}"
                y="${startY-25}"
                fill="white"
                font-size="12"
            >
                MH${i+1}
            </text>
        `;
    }

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
