// Set up hours and times from moment 


// Create function for the date 

function getHeaderDate() {
    var currentHeaderDate = moment().format("dddd, MMMM Do"); 
    $("#currentDay").text(currentHeaderDate);
}

// Create function to save to local storage 
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

// Add Font Awesome icon