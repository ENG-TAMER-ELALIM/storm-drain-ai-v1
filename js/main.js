// SELECT BUTTON

const calculateBtn = document.getElementById("calculateBtn");


// BUTTON EVENT

calculateBtn.addEventListener("click", function () {

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


    // PRINT VALUES TO CONSOLE

    console.log("Rainfall:", rainfall);

    console.log("Area:", area);

    console.log("Runoff:", runoff);

    console.log("Slope:", slope);

    console.log("Manning:", manning);

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
        manning
    );


// DISPLAY DIAMETER

document.getElementById("diameterResult")
.innerText =
pipeDiameter + " mm";

});


