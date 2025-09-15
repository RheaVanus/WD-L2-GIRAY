document.getElementById("logins").addEventListener("click", submits);


function submits(){
    let name= document.getElementById("username").value;
    alert(`Login Success, WELCOME TO MY SITE ${name}`);
    window.location.href = "index.html";
}
