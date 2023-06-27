var email =document.getElementById('field1');
var err1 =document.getElementById('err1');
var phno =document.getElementById('field2')
var err2 =document.getElementById('err2');
var pwd =document.getElementById('field3');
var err3 =document.getElementById('err3');

var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

function validateEmail(){
    //alert("hi")
    if(email.value.trim()==''){
        console.log('hii');
        err1.innerText="field cannot be empty";
        email.style.border='3px solid red'
        return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in correct format";
        email.style.border='3px solid red';
        return false
    }
    else{
        err1.innerText="";
        email.style.border='5px solid green';

        return true
    }
}
function validatephone()

{
  
  if((phno.value.match(phoneno)))
        {
            err2.innerText=""
            phno.style.border='5px solid green';
      return true;
        } 
      else if(phno.value.length<10)
        {
        err2.innerText='incorrect format';
        phno.style.border='5px solid red';
        return false;
        }
       

}


function validatepass(){
    if(pwd.value.trim()==''){
        err3.innerText="field cannot be empty";
        pwd.style.border='3px solid red'
        return false
    }
    else if(pwd.value.length<8){
        err3.innerText="password should  be greater tham 3";
        pwd.style.border='3px solid red';
        return fals
     } else{
        err3.innerText="";
        pwd.style.border='5px solid green';
        return true

    }
}
function verify(){
    if(!validateEmail()||!validatephone()||!validatepass()){
        return false
    }
    else{
        return true
    }
}