const userForm = document.querySelector('#form')
const sortName = document.querySelector('.sort-name');
const sortMeta = document.querySelector('.sort-meta');
const sortAge = document.querySelector('.sort-age');
const list = document.querySelector('.list');

const listItem = [
    {
        name: 'The Flash',
        meta: 'Red & Yellow',
        age: '24'
    },
    {
        name: 'Batman',
        meta: 'Black',
        age: '57'
    },
    {
        name: 'Superman',
        meta: 'Red & Blue',
        age: '32'
    },
    {
        name: 'Wonder Woman',
        meta: 'Gold',
        age: '30'
    },
    {
        name: 'Vicson Devee',
        meta: 'White & Black',
        age: '27'
    },
];

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
let name = document.querySelector('#name');
let meta = document.querySelector('#meta');
let age = document.querySelector('#age');

const userInput = {
    name: name.value,
    meta: meta. value,
    age: age.value
}


});

const displayList = () => {
list.innerHTML = '';
const entireList = listItem.map((items) => {
    return `
    <div class= "list-items">
    <div class = "item-title">${items.name}</div>
    <div class = "item-title">${items.meta}</div>
    <div class = "item-title">${items.age}</div>
    </div>
    `
}).join('');
list.innerHTML= entireList;

}
displayList();

let desc = false;
sortName.addEventListener('click', () => {
let array = sortArrayBy(listItem, 'name', desc);
displayList(array);
desc = !desc;
});

sortMeta.addEventListener('click', () => {
let array = sortArrayBy(listItem, 'meta', desc);
displayList(array);
desc = !desc;
});

sortAge.addEventListener('click', () => {
    let array = sortArrayBy(listItem, 'age', desc);
    displayList(array);
    desc = !desc;
});

const sortArrayBy = (array, sort, desc) => {
    array.sort((a, b) => {
        if(a[sort] < b[sort]) return -1;
        if(a[sort] > b[sort]) return 1;

        return 0;
    });

    if(desc)array.reverse()

    return array;
}

// I USED MAP FUNCTION TO ITERATE THROUGH THE ARRAY INSTEAD OF THIS GIANT FOR LOOP
// for (let i=0; i<array.length; i++){
//     let item = array[i];
//         let itemElement = document.createElement('div');
//         itemElement.classList.add('list-items');

//         let title = document.createElement('div');
//         title.classList.add('item-name');
//         title.innerText= item.name;
//         itemElement.appendChild(title);

//         let meta = document.createElement('div');
//         meta.classList.add('item-meta');
//         meta.innerText=item.meta;
//         itemElement.appendChild(meta);

//         let age = document.createElement('div');
//         age.classList.add('item-age');
//         age.innerText = item.age;
//         itemElement.appendChild(age);

//         list.appendChild(itemElement);
// }