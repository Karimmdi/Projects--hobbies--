const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;

    //validation input
    if(newItem === ''){
        alert('Kentä on tyhjä');

        return
    }
   //Create list item
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(newItem));
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    //Add li to the DOM
    itemList.appendChild(li);
    checkUI();
    itemInput.value = "";

} 
function createButton(classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon)
    return button;

}

function createIcon (classes){
   const icon = document.createElement('i');
   icon.className = classes;
   return icon;
}
//removeItem function
function removeItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        if(confirm('Oletko varmaa?')){
            e.target.parentElement.parentElement.remove();

            checkUI();
        }
        
    }


}

//clearItem function

function clearItems(e){
    // itemList.innerHTML = '';              *** easy way ***



    //another approach 
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    } 
    checkUI();

    
}
//filterItems function
function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) =>{
        const itemName = item.firstChild.textContent.toLocaleLowerCase();
        if(itemName.indexOf(text)!= -1){
            item.style.display = 'flex';

        }else{
            item.style.display = 'none';
        }
    });
    

}
// function that check the UI if there is any items
function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';

    }

}
//Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();

