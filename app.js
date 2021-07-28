var menuIcon = document.querySelector('#menu_icon');
var sideber = document.querySelector('.sideber');
var contaier = document.querySelector('.container');

menuIcon.onclick = function(){
    sideber.classList.toggle('small-sidebar');
    contaier.classList.toggle("large_container")
}