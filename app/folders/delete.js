import { getCookie, getURL } from "../global/functions.js";
import { viewFolders } from "./view.js";

export function deleteFolder(item) {

    const url = getURL() + "my-file-cabinet/api/folders/delete.php";

    const xhr = new XMLHttpRequest();
    
    xhr.open("post", url);

    const folderId = item.getAttribute('data-delete');
    
    const data = new FormData();
    data.set("user_id", getCookie('user_id'));
    data.set("folder_id", folderId);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            viewFolders();
        }
    }
    xhr.send(data);   

       
}