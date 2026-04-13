document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(response => {
        if (response.trim() === "success") {
            window.location.href = "chat.html";
        } else {
            document.getElementById("msg").textContent = "enter user2";
        }
    });
});
function load1() {
    fetch("login.php")
        .then(res => res.text())
        .then(response => {
            if (response.trim() === "logged") {
                window.location.href = "chat.html";
            }
        });
}
load1();
setInterval(load1, 2000);
