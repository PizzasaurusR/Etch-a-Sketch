
$(document).ready(function(){  
    for (var x=0; x<16; x++){
        for (var y=0; y<16; y++){
            var singleBox = $("<div class='unit'></div>");
            singleBox.appendTo('#container');
        }
    }
});

const gridBoxes = document.querySelector('#container div');

function changeClass () {
    this.classList.add('unit-hover');
}

gridBoxes.forEach(div => div.addEventListener('mouseover', changeClass));