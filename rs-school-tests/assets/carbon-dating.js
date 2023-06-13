// Check if sampleActivity is a string and if it can be converted to a number
if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity))) return false;

// Convert sampleActivity to a number
const activity = parseFloat(sampleActivity);

// Check if activity is within valid range
if (activity <= 0 || activity > MODERN_ACTIVITY) return false;

// Calculate the age of the sample using the formula for radioactive decay
const k = 0.693 / HALF_LIFE_PERIOD;
const t = Math.log(MODERN_ACTIVITY / activity) / k;

// Return the age rounded up to the nearest integer

return Math.ceil(t);