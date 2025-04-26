function goBack() {
    window.history.back();
}




document.getElementById("submit").addEventListener("click", function(event) {
    const password = document.getElementById("password").value;
    const checkPassword = document.getElementById("checkPassword").value;

    if (password !== checkPassword) {
        event.preventDefault(); 
        alert("Passwords do not match!");
    }
});

