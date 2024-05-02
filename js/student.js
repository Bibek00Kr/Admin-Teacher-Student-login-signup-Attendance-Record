var totalDays = 20;
var presentDays = 15;
    var attendancePercentage = (presentDays / totalDays) * 100;
    document.getElementById('attendancePercentage').textContent = attendancePercentage.toFixed(2);
