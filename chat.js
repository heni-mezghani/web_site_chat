load();
load1()
setInterval(load1, 2000);
fetch("get_user.php")
    .then(res => res.text())
    .then(username => {
        let name = document.getElementById("username");
        name.append(username);
    });

function load1() {
    fetch("login.php")
        .then(res => res.text())
        .then(response => {
            if (response.trim() !== "logged") {
                window.location.href = "login.html";
            }
        });
}


function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function load() {
    fetch("chat.txt")
        .then(res => res.text())
        .then(mes => {
            const safeText = escapeHTML(mes).replace(/\n/g, "<br>");
            document.getElementsByTagName("div")[0].innerHTML = safeText;
        });
}


function send() {
    let message = document.getElementsByTagName("input")[0].value;

    if (message === "") {
        window.alert("enter message");
        return;
    }

    let formData = new FormData();
    formData.append("message", message);

    fetch("send_message.php", {
        method: "POST",
        body: formData
    })
    .then(() => {
        document.getElementsByTagName("input")[0].value = "";
        load();
    });
}

document.getElementById("send").onclick = send;

setInterval(load, 2000);