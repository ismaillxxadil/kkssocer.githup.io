const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass(); 
        panel.classList.add('activ');
    });
});

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('activ'); 
    });
}
