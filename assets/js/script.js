$(setDayPlanner);

function setDayPlanner() {
    var currentDayEl = $("#currentDay");
    var today = moment().format("dddd, MMMM Do");
    currentDayEl.text(today);

    var eachTimeBlock = $(".time-block");
    eachTimeBlock.each(function(){
    var timeBlockId = $(this).attr("id");
    // console.log(this);
    var savedBlockId = $("#" + timeBlockId + " textarea");
    savedBlockId.text(localStorage.getItem(moment().format("dddd, MMMM Do, ") + "hour-" + timeBlockId));
    });

    $(".saveBtn").on("click" , descritionLocalSave);
}

function descritionLocalSave(event){
    var currentHourId = $(this).parent().attr("id");
    // console.log(this);
    localStorage.setItem(moment().format("dddd, MMMM Do, ") + "hour-" + currentHourId , $("#" + currentHourId + " textarea").val());
    console.log($("#" + currentHourId + " textarea").val());
    // console.log(moment().format("dddd, MMMM Do, ") + "hour-" + currentHourId + moment().format("a") , $("#" + currentHourId + " textarea").val());
    // console.log(currentHourId);
}

