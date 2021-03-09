//Could not figure out how to get the localStorage to work even with heavy references to the two GitHub links that I used for assistance. Need to go over this to make sure I understand it and it works moving forward 

// Set up hours and times. Unsure if this is the correct way to do this as I have seen conflicting ways to do this, however this did make sense to me given previous exercises. 
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
        ampm: "pm",
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

// Create function for the date referencing moment and the current day  

function getHeaderDate() {
    var currentHeaderDate = moment().format("dddd, MMMM Do"); 
    $("#currentDay").text(currentHeaderDate);
}

// Creates header date 
getHeaderDate();

// For each hour of the day, the below makes the timeblocks appear. jQuery utilized and referenced in GitHub links provided in ReadMe. 
myDay.forEach(function(thisHour) {
   
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div>")
        .text(`${thisHour.hour}${thisHour.ampm}`)
        .attr({
            "class": "col-md-2 hour"
    });

    var hourPlan = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }

    // Creates save button and references the font awesome icon used 
    var saveButton = $("<i class='far fa-save'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
})


