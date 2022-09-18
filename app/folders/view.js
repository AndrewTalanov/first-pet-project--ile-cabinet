import { getCookie, getURL, randColor } from "../global/functions.js";
import { deleteFolder } from "./delete.js";
import { goFolder } from "./go.js";
import { editFolder } from "./edit.js";

export function viewFolders(){

    const url = getURL() + "my-file-cabinet/api/folders/view.php";

    const xhr = new XMLHttpRequest();
        
    const data = new FormData();
    data.set("user_id", getCookie('user_id'));

    xhr.open("post", url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            createBlocks(xhr.response);
        }
    }
    xhr.send(data);

    function createBlocks(data) {

        document.querySelector('.js-btn-open-create-file').style.display = 'none';
        document.querySelector('.js-btn-open-create-folder').style.display = 'block';

        data = JSON.parse(data);
        
        if (data.length == 0) {
            document.querySelector('.nothing-list').style.display = "flex";
        } else {

            const container = document.querySelector('.js-lists');
            const title = `
                <div class="folders">
                    <h2 class="title-your-folders">Ваши папки:</h2>
    
                    <div class="list-items"></div>
                </div>
            `;
            container.innerHTML = title;
    
            let items = '';
    
            let listItems = document.querySelector('.list-items');

            document.querySelector('.nothing-list').style.display = "none";

            data.forEach(el => {
                items += `
                    <div class="item">
                        <div class="item-content" data-go="${el['id']}" style="background: ${randColor()};">
                            <h2 class="item-title">${el['name']}</h2>
                        </div>
                        <div class="item-btns">
                            <div class="edit" data-edit="${el['id']}">
                                <img src="../assets/image/edit.svg" alt="edit">
                            </div>
                            <div class="remove" data-delete="${el['id']}">
                                <img src="../assets/image/remove.svg" alt="remove"> 
                            </div>
                        </div>
                    </div>
                `;
            });
    
            listItems.innerHTML = items;
    
            document.querySelectorAll('.remove[data-delete]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    deleteFolder(item);
                });
            });

            document.querySelectorAll('.item-content[data-go]').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    goFolder(item);
                });
            });
            
            document.querySelectorAll('.edit[data-edit]').forEach(item => {
                item.addEventListener('click', () => {
                    editFolder(item, data);
                });
            });
        }
    }
}