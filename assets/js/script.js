//when page loads call setDayPlanner function
$(setDayPlanner);

function setDayPlanner() {
    //display date using momentjs
    var currentDayEl = $("#currentDay");
    var today = moment().format("dddd, MMMM Do");
    currentDayEl.text(today);
   
    changeBlocksColor();
    setInterval(changeBlocksColor , 60000);
    //geting saved descriptions from lacal storage
    var eachTimeBlock = $(".time-block");
    eachTimeBlock.each(function(){
    var timeBlockId = $(this).attr("id");
    // console.log(this);
    var savedBlockId = $("#" + timeBlockId + " textarea");
    savedBlockId.text(localStorage.getItem(moment().format("dddd, MMMM Do, ") + "hour-" + timeBlockId));
    });
    //adding event listener on save button
    $(".saveBtn").on("click" , descritionLocalSave);
}
//function to change timeblocks background color depending on current hour
function changeBlocksColor() {
    $(".time-block").each(function(){
        var timeBlockHour = $(this).attr("id");
        // console.log(timeBlockHour);
        var currentHour = moment().format("k");
        // console.log(currentHour);
        $(this).removeClass("past present future");

        if (currentHour > timeBlockHour) {
            $(this).addClass("past");
        }  else if (currentHour < timeBlockHour) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
        
    });
}
//saving descriptions in lacal storage
function descritionLocalSave(event){
    var currentHourId = $(this).parent().attr("id");
    // console.log(currentHourId);
    // console.log(this);
    localStorage.setItem(moment().format("dddd, MMMM Do, ") + "hour-" + currentHourId , $("#" + currentHourId + " textarea").val());
    
}

