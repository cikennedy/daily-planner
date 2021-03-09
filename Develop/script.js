// Set up hours and times from moment 
var myDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        ampm: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        ampm: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        ampm: "pm",
        reminder: ""
    },
    
]

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

