const button = document.getElementById('submit-button');

async function onSubmit(event) {
    event.preventDefault(); 
    console.log('entra el submit');
    if (validateUser()) {
        console.log('entra el validateUser');
        button.disabled = true;
        button.textContent = "Signing in...";

        setTimeout(() => {
            button.disabled = false;
            window.location.href = "./html/home.html"; 
        }, 1000);
    } else {
        alert("Invalid credentials! Please try again.");
    }
}
