const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')
let isEditMode = false;

function dispalyItems() {
    const itemsFromStorage = getItemsFromStorage()
    itemsFromStorage.forEach((item) => addItemToDOM(item))
    checkUI()
}

function onaddItemSubmit (e) {
    e.preventDefault();

   const newItem = itemInput.value
    if(newItem.value === '') {
        alert('Please add an item');
        return;
    }

   addItemToDOM(newItem); 


   addItemToStorage(newItem)
     
    checkUI()
    
    itemInput.value = '';
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton ('remove-item btn-link text-red')
    li.appendChild(button)


    itemList.appendChild(li)
}

function addItemToStorage (item){
    const itemsFromStorage = getItemsFromStorage()

    
    itemsFromStorage.push(item)


    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}



function createButton(classes){
    const button = document.createElement('button')
    button.className = classes
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

function createIcon (classes){
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}

function getItemsFromStorage(){
    let itemsFromStorage;

    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));     
    }

    return itemsFromStorage
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
       removeItem(e.target.parentElement.parentElement);
    } else{
        setItemToEdit(e.target)
    }
}
function setItemToEdit (item){
    isEditMode = true;
    iteem.style.color = '#ccc'
}

function removeItem(item) {
    if(confirm('Are you sure?')){
        item.remove();
    
        removeItemFromStorage(item.textcontent)
    
        checkUI()
    }
    
}

function removeItemFromStorage(item){
    let itemsFromStorage = getItemsFromStorage()

    itemsFromStorage = itemsFromStorage.filter((i) => i !== item )

    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}
function clearItems(){
    while (itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }    
}

function filterItems (e) {
    const items = itemList.querySelectorAll('li')
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild;

        console.log(itemName)
    })
}

function checkUI(){
    const items = itemList.querySelectorAll('li')
   
    if(items.length === 0) {
        clearBtn.style.display = 'none'
        itemFilter.style.display = 'none'
    } else {
        clearBtn.style.display = 'block'
        itemFilter.style.display = 'block'
    }
}

function init() {

itemForm.addEventListener('submit', onaddItemSubmit)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
itemFilter.addEventListener('input', filterItems)
document.addEventListener('DOMContentLoaded', dispalyItems)


checkUI()
}

init()


