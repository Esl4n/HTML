
function validation(){
    var ret_email = val_email();
    var ret_pass = val_pass();
    var ret_phones = val_number();
    var ret_postal = val_postal();
    var ret_address = val_address();
    var ret_city = val_cityOrTown();
    var ret_select = val_select();
    return ( ret_email && ret_pass && ret_phones && ret_postal && ret_address && ret_city && ret_select);
}


function val_type_email(email){
    var valArroba = email.indexOf('@');
    var valPoint = email.indexOf('.');
    if (valArroba < 1){
        return false;
    }else{
        if(valPoint <= valArroba + 2 || valPoint == email.length - 1){
            return false;
        }

        return true;
        

    }
}

function val_email(){
    var email = document.getElementById('Email').value;
    var msj = document.getElementById('msj-email');
    if (email != ''){
        if (val_type_email(email)){
            msj.innerHTML = ''
            return true;
        }else{
            msj.innerHTML = 'The entered format is incorrect'
            return false;
        }
    }else{
        msj.innerHTML = 'the field is empty';
        return false;
    }
}




function val_pass(){
    var pass = document.getElementById('pass').value;
    var msj = document.getElementById('msj-pass');
    if (pass != ''){
        if(3 > pass.length || 6 < pass.length){
            msj.innerHTML = 'The password must be greater than 3 and less than 6';
            return false;
        }else{
            if(val_re_pass(pass)){
                msj.innerHTML = 'passwords are not the same'
                return false
            }else{
                msj.innerHTML = ''
                return true
            }

        }

    }else{
        msj.innerHTML = 'the field is empty';
        return false;
    }
}

function val_re_pass(pass){
    var repass = document.getElementById('confirm-pass').value;
    
    if (repass == pass){
        return false
    }else{
        return true
    }
}

function val_number(){
    var phone = document.getElementById('phone').value;
    var cellphone = document.getElementById('mobile').value;
    var msj = document.getElementById('msj-phones');

    if (phone != '' || cellphone != ''){
        if(9 == phone.length || 8 == cellphone.length){
            msj.innerHTML = ''
            return true;
        }else{
            msj.innerHTML = 'Invalid phone or cell phone format'
            return false
        }
        
    }else{
        msj.innerHTML = 'Enter mobile number or phone number'
        return false;
    }
    

}


function val_postal(){
    var cod = document.getElementById('postal').value;
    var msj = document.getElementById('msj-post');

    if (cod != ''){
        if(7 == cod.length ){
            msj.innerHTML = '';
            return true;
        }else{
            msj.innerHTML = 'invalid format';
            return false;
        }

    }else{
        msj.innerHTML = 'the field is empty';
        return false;
    }
}

function val_address(){
    var address = document.getElementById('address').value;
    var msj = document.getElementById('msj-address');
    if(address != ''){
        msj.innerHTML = '';
        return true;
    }else{
        msj.innerHTML = 'the field is empty';
        return false;
    }
}

function val_cityOrTown(){
    var resp = document.getElementById('city').value;
    var msj =document.getElementById('msj-city');
    
    if (resp != ''){
        msj.innerHTML = '';
        return true;
    }else{
        msj.innerHTML = 'the field is empty'
        return false
    }

}

function val_select(){
    var select = document.getElementById('selector').value;
    var msj = document.getElementById('msj-select');
    if(select == 'none'){
        msj.innerHTML = 'the field is empty';
        return false;
    }else{
        msj.innerHTML = '';
        return true;
    }

}


