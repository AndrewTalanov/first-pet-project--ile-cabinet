
export function openBook(item, data) {
    
    const id = item.getAttribute('data-open');

    data.forEach(el => {
        if (el['id'] == id) {
            const wrapper = document.querySelector('.js-open-file');
            wrapper.style.display = "block";
            wrapper.innerHTML = `
            
                <div class="open-file">
                    <h2>${el['title']}</h2>
                    <h3>${el['under_title']}</h3>
                    <pre>${el['content']}</pre>
                    <button class="js-close-file btn btn-red">Закрыть</button>
                </div>
            
            `;
        
            document.querySelector('.js-close-file').addEventListener('click', () => {
                wrapper.style.display = "none";
                wrapper.innerHTML = ``;
            });            
        }
    });

}