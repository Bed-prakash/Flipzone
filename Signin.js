function submitForm(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("cpassword").value
    const fname=document.getElementById("fname").value
    const lname=document.getElementById("lname").value
    const number=document.getElementById("number").value
    const check=document.getElementById("check").value
    const g1=document.getElementById("g1").value
    const g2=document.getElementById("g2").value
    const g3=document.getElementById("g3").value
    console.log(number,lname,fname,check,g1,g2,g3);
    if (password==cpassword && password.length!=0 && (fname.length)!=0 && (lname.length)!=0 && (number.length)==10) {
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password);
        document.getElementById("errorR").innerHTML="Registration Successfull";
        document.getElementById("errorR").style.color="green";
        var form1 =document.forms
        form1[0].elements[0].value="";
        form1[0].elements[1].value="";
        form1[0].elements[2].value="";
        form1[0].elements[3].value="";
        form1[0].elements[4].value="";
        form1[0].elements[5].value="";
        form1[0].elements[6].value="";
        form1[0].elements[7].value="";
        form1[0].elements[8].value="";
        form1[0].elements[9].value="";
        form1[0].elements[10].value="";
        form1[0].elements[11].value="";
        form1[0].elements[12].value="";
        window.location.href="index.html";
    } else if(password!=cpassword ){
        document.getElementById("errorR").innerHTML="Miss match password";
        document.getElementById("errorR").style.color="red";
    } else if(password.length==0){
        document.getElementById("errorR").innerHTML="Invalid password";
        document.getElementById("errorR").style.color="red";
    }else if((fname.length)==0 ){
        document.getElementById("errorR").innerHTML="First Name is Not Found";
        document.getElementById("errorR").style.color="red";
    } else if((lname.length)==0 ){
        document.getElementById("errorR").innerHTML="Last Name is Not Found";
        document.getElementById("errorR").style.color="red";
    }else if((number.length)!=10){
        document.getElementById("errorR").innerHTML="Mobile Number Invalid";
        document.getElementById("errorR").style.color="red";
    }
}
