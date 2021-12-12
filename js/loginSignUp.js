import {animeMyBlocks,fadeOut,fadeIn,animeText} from "./animation.js";
import {valideMyEmailInput,validateMyPassInput,valideMyNameInput} from "./validate.js";
$(function(){

    // sign in section active by default
        fadeOut(".signUpRow");

    // once user click on sign up button (sign in section active)
    $("#signUpBtn").on("click",function(){
 
        fadeOut(".signInRow");
        $(".signUpRow").css("display","inline-flex");
        fadeIn(".signUpRow");

    });

    // once user click on sign in button (sign up section active)
    $("#signInBtn").on("click",function(){

        fadeOut(".signUpRow");
        fadeIn(".signInRow");

    });

    // background of white section begin
    const parent=document.querySelector(".parent");
    const parent1=document.querySelector(".parent1");
    
    animeMyBlocks(parent,"myBlock");
    animeMyBlocks(parent1,"myBlock1");
    // background of white section end


    // animate the text 'already have an acount & newe here'
        animeText(".alreadyHaveAvountTxt");
        animeText(".newHereTxt");



        // validaation login section
        let email=$("#email");
        let password=$("#password");

        email.on("keyup",function(){
            valideMyEmailInput("email");
        });

        password.on("keyup",function(){
            validateMyPassInput("password");
        });



        $("#myLoginForm").on("submit",function(eve){

            eve.preventDefault();
            $("#msgs").text("");

            if(validateMyPassInput("password")==false || valideMyEmailInput("email")==false){
                $(".msgs").text("Informations incorrectes !");
            }

        });


    // validaation login section
    let fullname=$("#fullname");
    let emailR=$("#emailR");
    let passwordR=$("#passwordR");
    let myRegesterForm=$("#myRegesterForm");

        fullname.on("keyup",function(){
            valideMyNameInput("fullname");
        });


            emailR.on("keyup",function(){
                valideMyEmailInput("emailR");
            });

            passwordR.on("keyup",function(){
                validateMyPassInput("passwordR");
            });

            myRegesterForm.on("submit",function(eve){

                    $(".msgsR").text("");
                    eve.preventDefault();
                if(validateMyPassInput("passwordR")==false || valideMyNameInput("fullname")==false || valideMyEmailInput("emailR")==false){
                    $(".msgsR").text("Informations incorrectes !");
                }

            });


});