window.onload = function() {
    let urlData = new URLSearchParams(window.location.search);
    let lang = urlData.get('lang');
    document.querySelector('#logo a').setAttribute('href', document.querySelector('#logo a').getAttribute('data-homeurl-' + lang));
    document.querySelector('.translated-content').classList.add(lang);
};