module.exports = {
    // Function to format date as MM/DD/YYYY
    format_date: (date) => {
        return new Date(date).toLocaleDateString();
    },

    // Function to format duration in a user-friendly way (converting seconds to minutes and hours)
    format_duration: (durationInSeconds) => {
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;

        return `${hours}h ${minutes}m ${seconds}s`;
    },

    // Function to format supplement dosage details
    format_supplement_dosage: (supplement) => {
        return `${supplement.name} - Dosage: ${supplement.dosage}`;
    },

    // Function to calculate the total duration of all workouts logged by the user
    calculate_total_duration: (workouts) => {
        return workouts.reduce((totalDuration, workout) => totalDuration + workout.duration, 0);
    },

    // Function to display a weekly summary of workout and supplement intake
    display_weekly_summary: (weeklyData) => {
        // code will go here if function is needed
    },

    // Function to format workout log entries
    format_workout_log: (workout) => {
        return `Date: ${workout.date}, Exercise: ${workout.exercise}, Duration: ${workout.duration} minutes`;
    }

};

