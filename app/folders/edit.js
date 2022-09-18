import { getCookie, getURL, openModal } from "../global/functions.js";
import { viewFolders } from "../folders/view.js";

export function editFolder(item, dataList) {

    const id = item.getAttribute('data-edit');

    dataList.forEach(el => {

        if ( id == el['id']) {
            document.querySelector('.js-modal-create-folder').innerHTML = `
                <form class="edit-folder">
                    <div class="modal-create-folder">
                        <h2>Введите название папки:</h2>
                        <input type="text" name="name">
                        <div class="btns">
                            <button type="submit" class="btn">Cохранить</button>
                            <button type="button" class="btn btn-red close-modal-edit-folder">Отмена</button>
                        </div>
                    </div>
                </form> 
            `;

            openModal('.edit-folder', '.close-modal-edit-folder');

            const url = getURL() + "my-file-cabinet/api/folders/edit.php";   

            const form = document.querySelector('.edit-folder');

            form.addEventListener('submit', (e) => {
                e.preventDefault();     
        
                const xhr = new XMLHttpRequest();
        
                xhr.open("post", url);
            
                const data = new FormData(form);
                data.set('id', id);
            
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {

                        document.querySelector('.' + form.className + ' input').value = "";
                        form.style.display = "none";

                        viewFolders();
                    }
                }
                xhr.send(data);
            });   
        }

    });    
}