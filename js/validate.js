let valideMyMessageInput=(input_Id)=>{

    let val=$("#"+input_Id).val();
    if(val.length<=0){
        $("#"+input_Id).addClass("is-invalid");
        $("#"+input_Id).removeClass("is-valid");
        $("#"+input_Id).next("div").text("Veuillez entrer un message !");
        return false;
    }else{
        $("#"+input_Id).removeClass("is-invalid");
        $("#"+input_Id).addClass("is-valid");
        return true;
    }

}

let valideMyEmailInput=(input_Id)=>{
    let val=$("#"+input_Id).val();
    if(!val.match(/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i)){
        $("#"+input_Id).addClass("is-invalid");
        $("#"+input_Id).removeClass("is-valid");
        $("#"+input_Id).next("div").text("adresse e-mail invalide !");
        return false;
    }else{
        $("#"+input_Id).removeClass("is-invalid");
        $("#"+input_Id).addClass("is-valid");
        return true;
    }

}

let valideMyNameInput=(input_Id)=>{
    let val=$("#"+input_Id).val();
    if(val.match(/[0-9]/i)){
        $("#"+input_Id).addClass("is-invalid");
        $("#"+input_Id).removeClass("is-valid");
        $("#"+input_Id).next("div").text("ce champ ne doit contenir que les caractères  !");
        return false;
    }
    else{
        $("#"+input_Id).removeClass("is-invalid");
        $("#"+input_Id).addClass("is-valid");
        return true;
    }
}


let validateMyPassInput=(input_Id)=>{
    let val=$("#"+input_Id).val();
    if(!val.match(/[0-9][A-z]/i)){
        $("#"+input_Id).addClass("is-invalid");
        $("#"+input_Id).removeClass("is-valid");
        $("#"+input_Id).next("div").text("le mot de passe doit inclure des caractères et des chiffres. !");
        return false;
    }
    else{
        $("#"+input_Id).removeClass("is-invalid");
        $("#"+input_Id).addClass("is-valid");
        return true;
    }

}


export{valideMyNameInput,valideMyEmailInput,valideMyMessageInput,validateMyPassInput};