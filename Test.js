(function () {
    console.log('bookmarklet started');
    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i<paragraphs.length; i++){
        paragraphs[i].innerHTML = 'kitty';
    }
})();


/*

(function () {let script = document.createElement('script');script.src = 'Accessify.js';document.body.appendChild(script);})();*/