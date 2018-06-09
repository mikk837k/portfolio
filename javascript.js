//.spinNavWheel
//#theme_one

//Global variable
var rotation = 0;


function updateAngle(pos) {
    return (rotation + pos * 90) % 360;
}

$(window).on("load", setScene);

function setScene() {
    console.log("siden er loadet!");
    $("#navTheme01").on("click", rotate);
    document.getElementById("navTheme01").pos = 2;
    $("#navTheme02").on("click", rotate);
    document.getElementById("navTheme02").pos = 1;
    $("#navTheme03").on("click", rotate);
    document.getElementById("navTheme03").pos = 3;
    $("#navTheme04").on("click", rotate);
    document.getElementById("navTheme04").pos = 0;

    $("#sectionTheme01, #sectionTheme02, #sectionTheme03, #sectionTheme04").addClass("hide");
    $("#pathcontainer").addClass("hide");
}

function rotate(event) {
    var angle = updateAngle(event.target.pos);
    $("#temaContainer").removeClass();
    $("#temaContainer").addClass("rotate" + angle);
    setTimeout(function () {
        showSection(event)
    }, 2000);
}

function showSection(event) {
    if (event.target.id === 'navTheme01') {
        $("#sectionTheme01").removeClass("hide");
        $("#sectionTheme02, #sectionTheme03, #sectionTheme04").addClass("hide");
    } else if (event.target.id === 'navTheme02') {
        $("#sectionTheme02").removeClass("hide");
        $("#sectionTheme01, #sectionTheme03, #sectionTheme04").addClass("hide");
    } else if (event.target.id === 'navTheme03') {
        $("#sectionTheme03").removeClass("hide");
        $("#sectionTheme01, #sectionTheme02, #sectionTheme04").addClass("hide");
    } else {
        $("#sectionTheme04").removeClass("hide");
        $("#sectionTheme01, #sectionTheme02, #sectionTheme03").addClass("hide");
    }
    $("#theme_one").removeClass("hide");
    $("#pathcontainer").removeClass("hide");
    window.location.href = '#theme_one';
}
