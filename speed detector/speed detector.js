// Function to calculate demerit points
function calculateDemeritPoints(speed, speedLimit) {
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      return 0;
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      return points;
    }
  }
  
  // Export the function to be used in the main program
  module.exports = {
    calculateDemeritPoints,
  };
  