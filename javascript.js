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

    $("#sectionTheme01, #sectionTheme02, #sectionTheme03, #sectionTheme04, #sectionContentTheme03Left, #sectionContentTheme03Right, #sectionContentTheme04Left, #sectionContentTheme04Right").addClass("hide");
    $("#pathcontainer").addClass("hide");

    $("#theme03Left").on("click", function () {
        showSectionContent("Theme03", "left")
    });
    $("#theme03Right").on("click", function () {
        showSectionContent("Theme03", "right")
    });
    $("#theme04Left").on("click", function () {
        showSectionContent("Theme04", "left")
    });
    $("#theme04Right").on("click", function () {
        showSectionContent("Theme04", "right")
    });
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
}

function showSectionContent(theme, side) {
    const a = "#sectionContent" + theme + "Right";
    console.log(theme, side);
    console.log(a);
    console.log($(a));
    if (side === "left") {
        $("#sectionContent" + theme + "Left").removeClass("hide");
        $("#sectionContent" + theme + "Right").addClass("hide");
    } else {
        $("#sectionContent" + theme + "Left").addClass("hide");
        $("#sectionContent" + theme + "Right").removeClass("hide");
    }
}
