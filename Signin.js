
function submitForm(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const cpassword=document.getElementById("cpassword").value
    if (password==cpassword) {
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("password",password);
        document.getElementById("errorR").innerHTML="Registration Successfull";
        document.getElementById("errorR").style.color="green";
        var form1 =document.forms
        console.log(form1);
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
    } else {
        document.getElementById("errorR").innerHTML="Miss match password";
    }
}
