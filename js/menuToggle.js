
$(document).ready(function () {
    changeMenuToggleIcon();
});

let toggle = document.getElementById('btn-toggle');

/* Changes the toggle icon on menu for smaller devices */
function changeMenuToggleIcon(){
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('on');
    });
}