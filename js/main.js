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

});
