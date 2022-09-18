import { getCookie, getURL } from "../global/functions.js";
import { viewFolders } from "../folders/view.js";
import { goFolder } from "../folders/go.js";

export function deleteFile(item) {
    
    const id = item.getAttribute('data-delete');

    const url = getURL() + "my-file-cabinet/api/books/delete.php";

    const xhr = new XMLHttpRequest();

    xhr.open("post", url);

    const data = new FormData();
    data.set("user_id", getCookie('user_id'));
    data.set("file_id", id);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // createBlocks(xhr.response);
            goFolder();
        }
    }
    xhr.send(data);
    
}