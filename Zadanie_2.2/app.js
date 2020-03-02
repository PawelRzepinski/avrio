const $url = 'https://jsonplaceholder.typicode.com/posts';
const sortBox = document.querySelector('.sortBox');
const select = document.querySelector('select');
const board = document.querySelector('.content');
const input = document.querySelector('input');
const button = document.querySelector('button');
let data;
let labelsTitle = [];
let sortOptionsValue = [];
let boxList;

function createLabels (data) {
    data.forEach((el) => {
        const label = document.createElement('div');
        const labelTitle = document.createElement('h4');
        const labelText = document.createElement('p');
        labelTitle.innerText = el.title;
        labelText.innerText = el.body;
        label.classList.add('box');
        label.dataset.user = el.userId;
        label.appendChild(labelTitle);
        label.appendChild(labelText);
        board.appendChild(label);

        if (!sortOptionsValue.includes(el.userId)) {
            sortOptionsValue.push(el.userId);
        }
    })

    labelsTitle = document.querySelectorAll('.box h4');
}

function createSelectOptions () {
    sortOptionsValue.forEach((optionValue) => {
        const selectOption = document.createElement('option');
        selectOption.innerText = optionValue;
        selectOption.dataset.userId = optionValue;
        select.appendChild(selectOption);
    })
}


function sortLabels () {
    const options = document.querySelectorAll('option');
    const box = document.querySelectorAll('.box')
    let optionsDataValue;
    options.forEach((option) => {
        if(option.selected){
            optionsDataValue = option.dataset.userId
        }
    })

    box.forEach((element) => {
        element.style.display = "block";
        
        if(optionsDataValue === 'all'){
            element.style.display = "block";
        }
        else if(optionsDataValue !== element.dataset.user){
            element.style.display = "none";
        }
    })
}

function sortLabelsTitle(e) {
    const searchText = e.target.value.toLowerCase();
    let titles = [...labelsTitle]

    titles = titles.filter(title => 
        title.textContent.toLowerCase().includes(searchText)    
    )
    board.textContent = "";
    titles.forEach(title => {
        board.appendChild(title.parentElement)
    })
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
        data = data
        createLabels(data);
        createSelectOptions ();
        button.addEventListener('click', sortLabels);
        input.addEventListener('input', sortLabelsTitle);
  });
