import { getCookie, getURL, randColor } from "../global/functions.js";
// import { viewFolders } from "./view.js";
// import { createBook } from "../books/create.js";
import { openBook } from "../books/open.js";
import { deleteFile } from "../books/delete.js";
import { editBook } from "../books/edit.js";

export function goFolder(item = null) {

    if (!getCookie('folder_id')) {
        document.cookie = `name_folder=${item.firstElementChild.textContent}`;
    }    

    const url = getURL() + "my-file-cabinet/api/folders/go.php";

    const xhr = new XMLHttpRequest();
    
    xhr.open("post", url);

    const data = new FormData();

    data.set("user_id", getCookie('user_id'));

    if (getCookie('folder_id')) {
        data.set("folder_id", getCookie('folder_id'));
    } else {
        const folderId = item.getAttribute('data-go');
        data.set("folder_id", folderId);
    }
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            createBlocks(xhr.response, item);
        }
    }
    xhr.send(data);   

    function createBlocks(data, el) {

        document.querySelector('.js-btn-open-create-file').style.display = 'block';
        document.querySelector('.js-btn-open-create-folder').style.display = 'none';

        document.querySelector('.js-lists').innerHTML = ``; 

        data = JSON.parse(data);

        if (data.length == 0) {
            document.querySelector('.nothing-list').style.display = "flex";
        } else {
            document.querySelector('.nothing-list').style.display = "none";
            const container = document.querySelector('.js-lists');

            const title = `
                <div class="folders">
                    <h2 class="title-your-folders">Вы в папке: ${getCookie('name_folder')}</h2>

                    <div class="book-items"></div>
                </div>
            `;
            container.innerHTML = title;

            let items = '';

            const listItems = document.querySelector('.book-items');
            
            data.forEach(el => {
                items += `
                    <div class="book-item" style="background: ${randColor()};" data-open="${el['id']}">
                        <h2 class="book-name">${el['title']}</h2>
                        <h3 class="book-name">${el['under_title']}</h3>
                        <pre class="book-name">${el['content']}</pre>
                        <div class="buttons">
                            <img data-edit="${el['id']}" class="js-edit-book" src="../assets/image/edit.svg" alt="edit">
                            <img data-delete="${el['id']}" class="js-delete-book" src="../assets/image/remove.svg" alt="remove">
                        </div>
                    </div>
                `;
                   
            });
    
            listItems.innerHTML = items;
    
            document.querySelectorAll('.book-item').forEach(item => {
                item.addEventListener('click', () => {
                    openBook(item, data);
                });
            });
            document.querySelectorAll('.js-edit-book').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    editBook(item, data);
                });
            });
            document.querySelectorAll('.js-delete-book').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    deleteFile(item);
                });
            });
            // document.querySelector('.js-btn-back').addEventListener('click', () => {
            //     viewFolders();
            // });
            // document.querySelector('.js-btn-book-create').addEventListener('click', () => {
            //     createBook();
            // });
        }
    }
}
