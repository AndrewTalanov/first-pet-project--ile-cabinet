import { getURL, removeValueInputs } from "../global/functions.js";

const SingIn = (function singInIIFE() {

    const url = getURL() + "my-file-cabinet/api/sing-in/sing-in.php";

    const form = document.querySelector(".js-sing-in");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open("post", url);

        const formData = new FormData(form);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('.js-status-log').style.color = "red";
                if (xhr.responseText == "Вы вошли в аккаунт!") {
                    document.querySelector('.js-status-log').style.color = "green";
                    singInApp();
                }
                document.querySelector('.js-status-log').textContent = xhr.responseText;
            }
        }
        xhr.send(formData);

        removeValueInputs();
    });

    function singInApp() {
        window.location.href = getURL() + 'my-file-cabinet/app/pages/app.php';
    }

}());
