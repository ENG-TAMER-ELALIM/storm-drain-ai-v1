// ============================================
// INPUT VALIDATION
// ============================================

function validateInputs(
    rainfall,
    area,
    runoff,
    slope,
    manning
) {

    // CHECK EMPTY VALUES

    if (
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
