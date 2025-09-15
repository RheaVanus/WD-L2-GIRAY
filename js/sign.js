document.getElementById("submits").addEventListener("click", signUp);

function signUp() {
    let name = document.getElementById("namee").value;
    let user = document.getElementById("user-sign").value;
    let pass = document.getElementById("pass-sign").value;

    let quest1 = prompt("Double check if the details are correct? Type Y/N").toLowerCase();

    switch (quest1) {
        case "y":
            alert(`Fullname: ${name}\nUsername: ${user}\nPassword: ${pass}`);
            changeDet();
            break;

        case "n":
            alert("Sign up successfully");
            alert("Please wait.....")
            alert(`Welcome to my site ${user}`)
            window.location.href = "index.html";
            break;

        default:
            alert("Invalid choice. Please type Y or N.");
    }
}

function changeDet() {
    let quest2 = prompt("Do you want some changes? Y/N").toLowerCase();
    let user = document.getElementById("user-sign").value;
    switch(quest2){
        case "y":
            alert("Please wait....")
            break;
        case "n":
            alert("Sign up successfully");
            alert("Please wait.....")
            alert(`Welcome to my site ${user}`)
            window.location.href = "index.html";
            break;
        default:
            alert("Invalid Choice")
            
    }
}