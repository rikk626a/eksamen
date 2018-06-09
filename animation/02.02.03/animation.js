$(window).on("load", kredit);


function sidenVises() {
     console.log("kredit");
     $("#raev_container").on("animationend", raev_sprite)
     $("#raev_container").addClass("move_in");
     $("#raev_sprite").addClass("walk");


     //    $("#kaninFalderBTN").on("click", kaninFalder);
     //    $("#kaninLiggerBTN").on("click", kaninLigger);
}

function kaninFalder() {
     console.log("kaninFalder");
     $("#kanin_container").off("animationend")
     $("#kanin_sprite").on("animationend", kaninLigger);
     $("#kanin_container").removeClass("move_in");
     $("#kanin_container").addClass("position_in");
     $("#kanin_sprite").removeClass("walk");
     $("#kanin_sprite").addClass("fall");

}



function kaninLigger() {
     console.log("kaninLigger");
     $("#kanin_sprite").removeClass("fall");
     $("#kanin_sprite").addClass("fallen");

}
