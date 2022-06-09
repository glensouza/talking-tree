$(document).ready(function () {
    $("#aboutNav").click(navigateAbout);
    $("#voteNav").click(navigateVote);
    $(".voteNav").click(navigateVote);
    $("#resultsNav").click(navigateResults);
    $("#addColorCheck").click(toggleColor);
    $("#brows").click(toggleBrows);
    $(".eyeColor").click(eyeChange);
    $("#smile").click(toggleSmile);
    $("#teeth").click(toggleTeeth);
    $(".mouth").click(mouthChange);
    $("#submitConfig").click(submitConfig);
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
});

function navigateAbout() {
    $("#voteNav").removeClass("active");
    $("#vote").hide();
    $("#resultsNav").removeClass("active");
    $("#results").hide();
    $("#about").show();
    $("#aboutNav").addClass("active");
}

function navigateVote() {
    $("#aboutNav").removeClass("active");
    $("#about").hide();
    $("#resultsNav").removeClass("active");
    $("#results").hide();
    $("#vote").show();
    $("#voteNav").addClass("active");
}

function navigateResults() {
    $("#aboutNav").removeClass("active");
    $("#about").hide();
    $("#voteNav").removeClass("active");
    $("#vote").hide();
    $("#results").show();
    $("#resultsNav").addClass("active");
}

function toggleColor() {
    $(".color").toggle();
}

function toggleBrows() {
    $(".sprite-brows").toggle();
}

function toggleSmile() {
    $(".sprite-smile").toggle();
}

function toggleTeeth() {
    $(".sprite-teeth").toggle();
}

function eyeChange() {
    switch ($(this).attr('id')) {
        case 'eyesBlack':
            $(".sprite-blackPupils").show();
            $(".sprite-colorPupils").hide();
            break;
        case 'eyesColor':
            $(".sprite-blackPupils").hide();
            $(".sprite-colorPupils").show();
            break;
    }
}

function mouthChange() {
    switch ($(this).attr('id')) {
        case 'mouthRed':
            $(".sprite-mouthNoTongue").show();
            $(".sprite-mouthTongue1").hide();
            $(".sprite-mouthTongue2").hide();
            $(".sprite-teeth").hide();
            break;
        case 'mouthTongue1':
            $(".sprite-mouthNoTongue").hide();
            $(".sprite-mouthTongue1").show();
            $(".sprite-mouthTongue2").hide();
            break;
        case 'mouthTongue2':
            $(".sprite-mouthNoTongue").hide();
            $(".sprite-mouthTongue1").hide();
            $(".sprite-mouthTongue2").show();
            break;
    }
}

function submitConfig() {
    var config = {
        color: false,
        brows: false,
        eyes: '',
        mouth: '',
        smile: false,
        teeth: false
    };

    if ($('.color').is(":visible")) {
        config = {
            brows: $(".sprite-brows").is(":visible"),
            color: $(".sprite-colorPupils").is(":visible"),
            eyes: $("input[name='eyes']:checked").val(),
            mouth: $("input[name='mouth']:checked").val(),
            smile: $(".sprite-smile").is(":visible"),
            teeth: $(".sprite-teeth").is(":visible")
        };
    }

    config.other = $("#other").val();
    debugger;

    /*
    $.ajax({
        url: '/config',
        type: 'POST',
        data: JSON.stringify(config),
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
        }
    });
    */
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Study', 11],
        ['Playing', 2],
        ['Watch TV', 2],
        ['Tution', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Day Schedule',
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart3d'));

    chart.draw(data, options);
}
