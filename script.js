document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if (name.length < 3) {
        alert("Name must be at least 3 characters long!");
        event.preventDefault();
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        event.preventDefault();
    }
});
document.getElementById("shuffleBtn").addEventListener("click", function() {
    let list = document.querySelector("#techList");
    let items = Array.from(list.children);
    
    // Shuffle the list items randomly
    items.sort(() => Math.random() - 0.5);
    
    // Clear and append shuffled items
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
});


