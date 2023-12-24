let select = document.getElementsByName('type_val');
let block = document.getElementsByTagName('input');

function reset () {
    for(i = 0; i < block.length; i ++) {
        if (block[i].type == 'text') {
            block[i].style.display = "none";
        }
    }
}
reset()
block[0].style.display = 'block';

select[0].addEventListener('change', function() {
    reset()
    block[select[0].selectedIndex].style.display = 'block';
});