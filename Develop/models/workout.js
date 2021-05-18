var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: { 
    type: Date,
    default: Date.now 
    },
    exercises: [
        {
            type:  {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            }
        }]
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
