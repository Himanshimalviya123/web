let signup=()=>{
    let inpname=document.querySelector("#name").value
    let inpnum=document.querySelector("#num").value
    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
   
    let errname=document.querySelector("#errname")
    if(inpname=="")
    {
      errname.innerHTML="please enter name"
    return false;
    }
   
  
  }