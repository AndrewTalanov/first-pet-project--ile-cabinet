import { getCookie, getURL } from "../global/functions.js";
import { viewFolders } from "../folders/view.js";
import { goFolder } from "../folders/go.js";

export function editBook(item, dataList) {
    
    const id = item.getAttribute('data-edit');

    dataList.forEach(el => {
        
        if ( id == el['id']) {
            
            const wrapper = document.querySelector('.js-edit-file');
            wrapper.style.display = "block";
            wrapper.innerHTML = `
                <form class="modal-edit-file">
                    <div class="content-create-file">
                        <fieldset>
                            <legend>Заголовок</legend>
                            <input name="title" class="" type="text" placeholder="Заголовок" value="${el['title']}">
                        </fieldset>   
                        <fieldset>
                            <legend>Подзаголовок</legend>
                            <input name="under_title" class="" type="text" placeholder="Подзаголовок" value="${el['under_title']}">
                        </fieldset>   
                        <fieldset class="fieldset-for-textarea">
                            <legend>Текст</legend>
                            <textarea name="content" placeholder="текст">${el['content']}</textarea>
                        </fieldset>   
                        <button class="btn js-sumbit-close" type="submit">Сохранить изменения</button>
                        <button class="btn btn-red js-btn-close close-edit" type="button">Закрыть</button>
                    </div>
                </form>
            `;
            document.querySelector('.modal-edit-file').style.display = "block";

            document.querySelector(".close-edit").addEventListener('click', () => {
                wrapper.style.display = "none";
                wrapper.innerHTML = ``;
            });

            const url = getURL() + "my-file-cabinet/api/books/edit.php";   

            const form = document.querySelector('.modal-edit-file');
        
            form.addEventListener('submit', (e) => {
                e.preventDefault();     
        
                const xhr = new XMLHttpRequest();
        
                xhr.open("post", url);
            
                const data = new FormData(form);
                data.set("user_id", getCookie('user_id'));
                data.set("file_id", id);
            
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        wrapper.style.display = "none";
                        wrapper.innerHTML = ``;
                        goFolder();
                    }
                }
                xhr.send(data);
            });            
        }
    });

}