import { getURL, removeValueInputs } from "../global/functions.js";

const Register = (function registerIIFE() {

    const url = getURL() + "my-file-cabinet/api/register/register.php";

    const form = document.querySelector(".js-register");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const xhr = new XMLHttpRequest();
        
        xhr.open("post", url);

        const formData = new FormData(form);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText == "Успешный успех") {
                    document.querySelector('.js-status-reg').style.color = "green";    
                } else {
                    document.querySelector('.js-status-reg').style.color = "red";    
                }
                document.querySelector('.js-status-reg').textContent = xhr.responseText;
            }
        }
        xhr.send(formData);   

        removeValueInputs();
    });
}());