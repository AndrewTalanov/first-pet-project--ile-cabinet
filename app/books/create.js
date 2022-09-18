import { viewFolders } from "../folders/view.js";
import { getURL, removeValueInputs } from "../global/functions.js";
import { goFolder } from "../folders/go.js";

export function createBook(name){
   
    const url = getURL() + "my-file-cabinet/api/books/create.php";

    const form = document.querySelector(name);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();

        xhr.open("post", url);

        const formData = new FormData(form);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {

                document.querySelector('.content-main').style.overflowY =  'scroll';
                form.style.display = "none";
                removeValueInputs();
                goFolder();
            }
        }
        xhr.send(formData);   

    });
}
