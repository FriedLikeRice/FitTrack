-- Create table for exercises
CREATE TABLE exercises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    muscle_group VARCHAR(100) NOT NULL
);

-- Inserting the top 100 most popular gym exercises with their muscle groups
INSERT INTO exercises (name, muscle_group) VALUES 
    ('Push-Up', 'Chest'),
    ('Pull-Up', 'Back'),
    ('Squat', 'Legs'),
    ('Deadlift', 'Legs'),
    ('Bench Press', 'Chest'),
    ('Shoulder Press', 'Shoulders'),
    ('Barbell Row', 'Back'),
    ('Bicep Curl', 'Biceps'),
    ('Tricep Dip', 'Triceps'),
    ('Plank', 'Core'),
    ('Russian Twist', 'Core'),
    ('Leg Press', 'Legs'),
    ('Lunges', 'Legs'),
    ('Leg Curl', 'Legs'),
    ('Leg Extension', 'Legs'),
    ('Calf Raise', 'Legs'),
    ('Incline Bench Press', 'Chest'),
    ('Decline Bench Press', 'Chest'),
    ('Chest Fly', 'Chest'),
    ('Pulldown', 'Back'),
    ('Lat Pulldown', 'Back'),
    ('Seated Row', 'Back'),
    ('Dumbbell Press', 'Shoulders'),
    ('Dumbbell Fly', 'Chest'),
    ('Dumbbell Row', 'Back'),
    ('Dumbbell Curl', 'Biceps'),
    ('Dumbbell Tricep Extension', 'Triceps'),
    ('Skull Crushers', 'Triceps'),
    ('Arnold Press', 'Shoulders'),
    ('Front Raise', 'Shoulders'),
    ('Lateral Raise', 'Shoulders'),
    ('Reverse Fly', 'Back'),
    ('Hyperextension', 'Back'),
    ('Romanian Deadlift', 'Legs'),
    ('Hack Squat', 'Legs'),
    ('Box Jump', 'Legs'),
    ('Step-Up', 'Legs'),
    ('Burpees', 'Full Body'),
    ('Mountain Climbers', 'Core'),
    ('Sit-Up', 'Core'),
    ('Hanging Leg Raise', 'Core'),
    ('Dips', 'Triceps'),
    ('Tricep Kickback', 'Triceps'),
    ('Close-Grip Bench Press', 'Triceps'),
    ('Hammer Curl', 'Biceps'),
    ('Preacher Curl', 'Biceps'),
    ('Concentration Curl', 'Biceps'),
    ('Machine Chest Press', 'Chest'),
    ('Machine Shoulder Press', 'Shoulders'),
    ('Machine Pulldown', 'Back'),
    ('Machine Row', 'Back'),
    ('Machine Leg Press', 'Legs'),
    ('Machine Leg Curl', 'Legs'),
    ('Machine Leg Extension', 'Legs'),
    ('Machine Calf Raise', 'Legs'),
    ('Machine Fly', 'Chest'),
    ('Cable Crossover', 'Chest'),
    ('Cable Row', 'Back'),
    ('Cable Pulldown', 'Back'),
    ('Cable Curl', 'Biceps'),
    ('Cable Tricep Pushdown', 'Triceps'),
    ('Cable Lateral Raise', 'Shoulders'),
    ('Cable Crunch', 'Core'),
    ('Russian Twist', 'Core'),
    ('Oblique Crunch', 'Core'),
    ('Plank Shoulder Tap', 'Core'),
    ('Leg Raises', 'Core'),
    ('Side Plank', 'Core'),
    ('Sissy Squat', 'Legs'),
    ('Hack Squat', 'Legs'),
    ('Leg Press', 'Legs'),
    ('Seated Leg Curl', 'Legs'),
    ('Standing Calf Raise', 'Legs'),
    ('Dumbbell Bench Press', 'Chest'),
    ('Dumbbell Shoulder Press', 'Shoulders'),
    ('Dumbbell Lateral Raise', 'Shoulders'),
    ('Dumbbell Front Raise', 'Shoulders'),
    ('Dumbbell Shrugs', 'Shoulders'),
    ('Dumbbell Pullover', 'Back'),
    ('Dumbbell Deadlift', 'Back'),
    ('Dumbbell Squat', 'Legs'),
    ('Dumbbell Lunges', 'Legs'),
    ('Dumbbell Step-Up', 'Legs');

-- Describe the 'exercises' table
DESC exercises;
