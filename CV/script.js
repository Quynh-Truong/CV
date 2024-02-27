const darkToggleMode = document.getElementById('darkToggleMode');

darkToggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


let pressedKeys = "";

window.addEventListener('keyup', (e) => {
    pressedKeys += e.key;
    pressedKeys = pressedKeys.slice(-2)
    if(pressedKeys === "hi") {
        alert("WHAAAT?! You should buy a lotto ticket!")
    }
    console.log(pressedKeys);
})