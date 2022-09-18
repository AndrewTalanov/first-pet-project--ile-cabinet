import { openModal } from "./global/functions.js";
import { createFolder } from "./folders/create.js";
import { viewFolders } from "./folders/view.js";
import { createBook } from "./books/create.js";

const openCreateFolder = document.querySelector('.js-btn-open-create-folder');

openCreateFolder.addEventListener('click', () => {
    openModal('.wrapper-modal', '.close-modal-create-folder');
});

const openCreateFile = document.querySelector('.js-btn-open-create-file');

openCreateFile.addEventListener('click', () => {
    openModal('.modal-create-file', '.js-btn-close');
});

createFolder('.wrapper-modal');
createBook('.modal-create-file');

viewFolders();

const listFolder = document.querySelector('.header-home');

listFolder.addEventListener('click', () => {
    viewFolders();
});

