// ============================================
// INPUT VALIDATION
// ============================================
function validateInputs(
    networkType,
    rainfall,
    area,
    runoff,
    slope,
    manning,
    pipeLength
) {

    // CHECK EMPTY VALUES

    if (
        pipeLength === "" ||
        networkType === "" ||
        rainfall === "" ||
        area === "" ||
        runoff === "" ||
        slope === "" ||
        manning === ""
    ) {

        return {
            valid: false,
            message:
                "Please fill in all input fields."
        };

    }


    // CHECK NEGATIVE VALUES

    if (
        pipeLength <= 0 ||
        rainfall <= 0 ||
        area <= 0 ||
        runoff <= 0 ||
        slope <= 0 ||
        manning <= 0
    ) {

        return {
            valid: false,
            message:
                "All values must be greater than zero."
        };

    }


    // VALID INPUTS

    return {
        valid: true
    };

}
