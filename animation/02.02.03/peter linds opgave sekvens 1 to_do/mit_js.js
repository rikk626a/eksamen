$(window).on("load", sidenVises);


function sidenVises() {
     console.log("sidenVises");
     $("#kanin_container").on("animationend", kaninFalder)
     $("#kanin_container").addClass("move_in");
     $("#kanin_sprite").addClass("walk");


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


var erDerKlikket5Gange = false;
var antalKlik = 0;
$(window).on("load", koerScriptet);

function koerScriptet() {
     console.log("koerScriptet");
     $(".knap").on("click", knapKlik);
     setTimeout(saaErTidenGaaet, 10000);

}

function knapKlik() {

     antalKlik++;
     console.log("knapKlik " + antalKlik);
     if (antalKlik >= 5) {
          //console.log("SUCCES der er klikket pÃ¥ alle knapper");
          erDerKlikket5Gange = true;
          hvordanGikDet();
     }


     $(this).off("click", knapKlik);
     $(this).addClass("goer_roed alm_cursor");
}

function saaErTidenGaaet() {
     console.log("saaErTidenGaaet");

     if (erDerKlikket5Gange == false) {

          //console.log("FIASKO: Den gik ikke")
          hvordanGikDet();
     }

}

function hvordanGikDet() {
     $(".knap").off("click", knapKlik);
     $(".knap").addClass("alm_cursor");

     if (erDerKlikket5Gange == true) {

          console.log("SUCCES");
     } else {
          console.log("fiasko du mangler " + (5 - antalKlik) + " knapper");

     }
}
