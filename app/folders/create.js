import { getURL } from "../global/functions.js";
import { viewFolders } from "./view.js";

export function createFolder(name){

    const url = getURL() + "my-file-cabinet/api/folders/create.php";

    const form = document.querySelector(name);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        
        xhr.open("post", url);

        const formData = new FormData(form);
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                
                document.querySelector('.content-main').style.overflowY =  'scroll';

                document.querySelector('.' + form.className + ' input').value = "";
                form.style.display = "none";
                
                viewFolders();
            }
        }
        xhr.send(formData);   

    });

}

