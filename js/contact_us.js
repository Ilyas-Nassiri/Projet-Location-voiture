import {animeText2} from "./animation.js";
import {valideMyNameInput,valideMyEmailInput,valideMyMessageInput} from "./validate.js";

// scroll magic
var controller = new ScrollMagic.Controller();

// first scene for Contact form
var contactDivScrol=new ScrollMagic.Scene({
    triggerElement:".contactTarget"
}).setClassToggle(".contactDivScrol","show").addTo(controller);


// first scene for Contact infos
var contactInfoLocalisation=new ScrollMagic.Scene({
    triggerElement:".contactTarget"
}).setClassToggle(".contactInfoLocalisation","show").addTo(controller);

var contactInfoHours=new ScrollMagic.Scene({
    triggerElement:".contactTarget"
}).setClassToggle(".contactInfoHours","show").addTo(controller);


var contactInfoEmail=new ScrollMagic.Scene({
    triggerElement:".contactTarget"
}).setClassToggle(".contactInfoEmail","show").addTo(controller);

var contactInfoPhone=new ScrollMagic.Scene({
    triggerElement:".contactTarget"
}).setClassToggle(".contactInfoPhone","show").addTo(controller);

// scroll magic end



// include footer
function includeFooter(){
        
    fetch("footer.html").then(response=>{
        return response.text();
    }).then(response=>{
        document.getElementById("footerP").innerHTML=response;
    });
}
includeFooter();



// anime text 'contact us'

animeText2(".contact_usTxt");
// fadeIn(".contact_usTxt");



// validate user inputs
$("#name").on("change",function(){
    valideMyNameInput("name");
});

$("#email").on("change",function(){
    valideMyEmailInput("email");
});

$("#message").on("change",function(){
    valideMyMessageInput("message");
});



$("form").on("submit",function(ev){

    ev.preventDefault();

    if(valideMyEmailInput("email")==false || valideMyMessageInput("message")==false || valideMyNameInput("name")==false){
        $(".msgs").text("Informations incorrectes !");
    }else{
        $(".msgs").text("");
    }
});


$(window).scroll(function(){

    var r=$(".navbar");
    var scroll=$(window).scrollTop();

    if(scroll>=100){
        r.css("background","#212227");
    }
    else{
        r.css("background","transparent");
    }


    $("canva").css("position","absolute");
});