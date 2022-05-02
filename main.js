const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ol');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    var ch = document.createElement('input');
    ch.type = 'checkbox'
    li.appendChild(ch);
    const x = document.createElement('button');
    x.textContent = "X";
    li.appendChild(x);

    ch.addEventListener('change', function(check) {
    check.preventDefault();
    if (this.checked) {
        li.textContent = input.value + ': is all done';
    }
   
});

    x.addEventListener('click', deleteItem, false)
   function deleteItem(){
    li.remove();
};
});
