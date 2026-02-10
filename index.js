module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};


function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      console.log("Login successful")
      return "Login successful";
    } else if (attemptCount < 3) {
      attemptCount++;
      console.log(`Attempt ${attemptCount}: Login failed`)
      return `Attempt ${attemptCount}: Login failed`;
    } else {
      attemptCount++
      console.log("Account locked due to too many failed login attempts")
      return "Account locked due to too many failed login attempts";
    }
  }

  return loginAttempt
};















