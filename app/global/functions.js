
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function getURL() {
    // return 'http://f0702007.xsph.ru/';
    
    return 'http://' // - localhost
}

export function removeValueInputs() {
    document.querySelectorAll('input').forEach(el => {
        el.value = "";
    });
    document.querySelectorAll('textarea').forEach(el => {
        el.value = "";
    });
}

export function openModal(name, close) {

    document.querySelector('.content-main').style.overflowY =  'hidden';

    const wrapper = document.querySelector(name);

    wrapper.style.display = "block";

    document.querySelector(close).addEventListener('click', () => {
        document.querySelectorAll(name + ' input').forEach(el => {
            el.value = "";
        });
        document.querySelectorAll(name + ' textarea').forEach(el => {
            el.value = "";
        });

        document.querySelector('.content-main').style.overflowY =  'scroll';

        wrapper.style.display = "none";
    });
}

export function randColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}