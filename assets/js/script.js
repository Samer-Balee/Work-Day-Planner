var currentDayEl = $("#currentDay");

function displayCurentDay() {
    var today = moment().format("dddd, MMMM Do");
    currentDayEl.text(today);
}
displayCurentDay();