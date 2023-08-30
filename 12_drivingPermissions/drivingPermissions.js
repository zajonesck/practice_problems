let drivingPermissions = function (age, violations) {
  if (age >= 21) {
    return "Driver's License";
  } else if (age >= 18 && violations <= 3) {
    return "Driver's License";
  } else if (age === 16 || age === 17) {
    return "Learner's Permit";
  } else {
    return "Not Eligible";
  }
};
