let currentDay = moment().format('MMMM Do YYYY');
let currentTime = moment().format('HH');


$(document).ready(function() {
    $("#currentDay").text(currentDay);
    for (let i = 9; i < 18; i++) {
        //create row
        const row = $("<div class='row'>");
        //create column for time
        const calTime = $("<div class='col-sm-2'> <p class='hour'>");
        //create column for event description
        const calEvent = $("<div class='col-sm-8'> <textarea class='description' placeholder='Add event description...'></textarea>");
        //create column for save button
        const calSave = $("<div class='col-sm-2'> <button class='saveBtn fas fa-save'</button>'");

        //append each column to the row
        row.append(calTime);
        row.append(calEvent);
        row.append(calSave);

        //add the rows to the container
        $(".container").append(row);
    }

    
});