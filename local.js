// VANTA.BIRDS({
//     el: "#ani",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     backgroundColor: 0x3077c5,
//     color1: 0x8d0000,
//     color2: 0x3838ab,
//     birdSize: 1.50,
//     backgroundAlpha: 0.79
//   })




// let set=()=>{
//     let inpname = document.querySelector("#name").value;
//     let inpnumer = document.querySelector("#num").value;
//     let inpemail = document.querySelector("#Email").value;
//     let inppass = document.querySelector("#pass").value;

//     let errname = document.querySelector("#err1");
//     let errnum = document.querySelector("#err2");
//     let erremail = document.querySelector("#err3");
//     let errpass = document.querySelector("#err4");

//     if(inpname == ""){
//         errname.innerHTML="Please fil the name";
//         errname.style.color="red";
//         return false
//     }

//     if(inpnumer.length !== 10 || inpnumer == ""){
//         errnum.innerHTML="Please fil the number";
//         errnum.style.color="red";
//         return false

//     }

//     if(!(inpemail.includes('@')) && (inpemail.includes('.com'))){
//         erremail.innerHTML="Please fil the email";
//         erremail.style.color="red";
//         return false

//     }

//     if(inppass.length >= 8){
//         errpass.innerHTML="Please fil the password";
//         errpass.style.color="red";
//         return false

//     }


//     localStorage.setItem("Name", inpname);
//     localStorage.setItem("Number", inpnumer);
//     localStorage.setItem("Email", inpemail);
//     localStorage.setItem("Password", inppass);

//     location.href="login2.html";
//     return false;
// }

// //--------------------------Singnup has end-------------------------

// let set2=()=>{
//  let inpuser = document.querySelector("#name1").value;
//  let inppassword = document.querySelector("#pass1").value;

//  let erruser = document.querySelector("#erruser1");
//  let errpassword1 = document.querySelector("#errpassword");


//   if(inpuser == ""){
//     erruser.innerHTML="Please fil the name";
//     erruser.style.color="red";
//     return false

//   }

//   if(inppassword == "" && inppassword.length >= 8){
//     errpassword1.innerHTML="Please fil the pasword";
//     errpassword1.style.color="red";
//     return false

//    }


//    let localname = localStorage.getItem("Name");
//    let localpass = localStorage.getItem("Password");

//    if(localname==localname && localpass==localpass){
//      location.href="rentcar.html";
//      return false

//    }else{
//     alert("invalid name or password");
//    }
//     return false;

// }
VANTA.CLOUDS({
  el: "#ani",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
})


let signup=()=>{


  let inpname=document.querySelector("#name").value
  let inpemail=document.querySelector("#email").value
  let inppassword=document.querySelector("#pass").value

  let errname=document.querySelector("#errname")
  let errmail=document.querySelector("#erremail")
  let errpassword=document.querySelector("#errpass")

  if(inpname==""){
      errname.innerHTML="Please enter name"
      errname.style.color="red"
      return false;
  }
  /*if(inpemail==""){
      errmail.innerHTML="Please enter Email"
      errmail.style.color="red"
      return false;
  }
  if(inppassword==""){
      errpassword.innerHTML="Please enter password"
      errpassword.style.color="red"
      return false;
  }*/
  else if(!(inpemail.includes('@') && inpemail.includes(".com"))){
      errmail.innerHTML="Please Enter the Valid E-mail @,.com"
      errmail.style.color="red"
      return false;
   }
   else if(!(inppassword.match([/1234567890/])&& inppassword.match([/!@#$%&*.,/])&& inppassword.match([/a-z/]) && inppassword.match(/A-Z/))){
      errpassword.innerHTML="Please Enter Strong Password Write dots,symbols,number"
      errpassword.style.color="red"
      return false;
   }

  localStorage.setItem("name",inpname)
  localStorage.setItem("email",inpemail)
  localStorage.setItem("pass",inppassword)
  
   location.href="Locallogin.html"
   return false;


}    

let loginup=()=>{
  let loginname=document.querySelector("#logininp").value
  let loginpass=document.querySelector("#loginpass").value

  // let errormail=document.querySelector("#errmail")
  // let errorpass=document.querySelector("#errpassw")

  let localname=localStorage.getItem("name")
  let localpass=localStorage.getItem("pass")

  if(loginname==localname && loginpass==localpass){
      location.href="localHome.html"
  }
  else {
      alert("invalid username or password")
     // errorpass.innerHTML="invalid "

     
  }
  return false;


}
