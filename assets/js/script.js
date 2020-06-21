var tasks = {};

var rightNow = moment().format("dddd, MMMM Do");
$("#currentDay").html(rightNow);

var saveTasks = function () {
    console.log("saving tasks");
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

function updateTime() {
    $(".time-0").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-0").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-0").addClass("present");
        } else {
            $("#textarea-0").addClass("future");
        }
    });
    $(".time-1").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-1").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-1").addClass("present");
        } else {
            $("#textarea-1").addClass("future");
        }
    });
    $(".time-2").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-2").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-2").addClass("present");
        } else {
            $("#textarea-2").addClass("future");
        }
    });
    $(".time-3").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-3").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-3").addClass("present");
        } else {
            $("#textarea-3").addClass("future");
        }
    });
    $(".time-4").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-4").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-4").addClass("present");
        } else {
            $("#textarea-4").addClass("future");
        }
    });
    $(".time-5").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-5").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-5").addClass("present");
        } else {
            $("#textarea-5").addClass("future");
        }
    });
    $(".time-6").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-6").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-6").addClass("present");
        } else {
            $("#textarea-6").addClass("future");
        }
    });
    $(".time-7").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-7").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-7").addClass("present");
        } else {
            $("#textarea-7").addClass("future");
        }
    });
    $(".time-8").each(function () {
        var timeBlockHour = parseInt($(this).attr("data-time"));
        var currentHour = moment().format('H');

        // Compare numbers to current time
        if (timeBlockHour < currentHour) {
            $("#textarea-8").addClass("past");
        } else if (timeBlockHour == currentHour) {
            $("#textarea-8").addClass("present");
        } else {
            $("#textarea-8").addClass("future");
        }
    });
}

var timeInterval = setInterval(updateTime, 1000);

$('#btn').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-0').val()
    localStorage.setItem('9AM', text);

});

$('#btn-1').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-1').val()
    localStorage.setItem('10AM', text);

});

$('#btn-2').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-2').val()
    localStorage.setItem('11AM', text);

});

$('#btn-3').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-3').val()
    localStorage.setItem('12PM', text);

});

$('#btn-4').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-4').val()
    localStorage.setItem('1PM', text);

});

$('#btn-5').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-5').val()
    localStorage.setItem('2PM', text);

});

$('#btn-6').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-6').val()
    localStorage.setItem('3PM', text);

});

$('#btn-7').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-7').val()
    localStorage.setItem('4PM', text);

});

$('#btn-8').on('click', function (event) {
    event.preventDefault();

    var text = $('#textarea-8').val()
    localStorage.setItem('5PM', text);

});

function updateTask() {
    $('#textarea-0').val(localStorage.getItem('9AM'));

    $('#textarea-1').val(localStorage.getItem('10AM'));

    $('#textarea-2').val(localStorage.getItem('11AM'));

    $('#textarea-3').val(localStorage.getItem('12AM'));

    $('#textarea-4').val(localStorage.getItem('1PM'));

    $('#textarea-5').val(localStorage.getItem('2PM'));

    $('#textarea-6').val(localStorage.getItem('3PM'));

    $('#textarea-7').val(localStorage.getItem('4PM'));

    $('#textarea-8').val(localStorage.getItem('5PM'));
}

updateTask()