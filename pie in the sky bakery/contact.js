const fullName= document.getElementById("name");
const phone= document.getElementById("phone");
const email= document.getElementById("email");
const date= document.getElementById("date");
const form=document.getElementById("form");

form.addEventListener('submit',function(e){
   let messages=[]
   let mailFormat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    if(fullName.value===''|| fullName.value==null){
        messages.push("name");
        document.getElementById("errorname").innerText="*Required";
    }
    if(phone.value===''|| phone.value==null){
        messages.push("name");
        document.getElementById("errortele").innerText="*Required";

     }
     if(email.value===''|| email.value==null){
         messages.push("name");
         document.getElementById("erroremail").innerText="*Required";
     }else if(!(email.value.match(mailFormat))){
      document.getElementById("erroremail").innerText="please enter a valid email";

     }
     if(date.value===''|| date.value==null){
        messages.push("name");
        document.getElementById("errordate").innerText="*please enter a valid date";

     }
     if(messages.length>0){
        e.preventDefault()
     }
})