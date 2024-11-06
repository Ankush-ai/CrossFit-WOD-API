// Controllers/recordController.js
const recordService = require("../Services/recordService");

// Controller function to get records for a specific workout
const getRecordForWorkout = (req, res) => {
    const { workoutId } = req.params; // Extract workoutId from request parameters

    try {
        const record = recordService.getRecordForWorkout(workoutId);

        // Check if record exists
        if (!record) {
            return res.status(404).send({
                status: "FAILED",
                message: `No records found for workout ID: ${workoutId}`,
            });
        }

        // Send response with record data
        res.status(200).send({
            status: "OK",
            data: record,
        });
    } catch (error) {
        // Handle any unexpected errors
        res.status(500).send({
            status: "FAILED",
            message: "An error occurred while retrieving the record.",
            error: error.message,
        });
    }
};

// Export the controller function
module.exports = {
    getRecordForWorkout,
};
