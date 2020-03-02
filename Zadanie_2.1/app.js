const randomNumber = () => {
    min = 0;
    max = 255;
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}

const deleteButtonGenerator = (element) => {
    const deleteBtn = $('<button class="delete"></button>');
    element.append(deleteBtn);
}

const delateElement = function () {
    $(this).parent().remove();
}

const createElementsList = () => {
    let index = 0;

    for(let i=0; i<100; i++){
        index++;
        const liElement = $(`<li>Element ${index}</li>`);
        deleteButtonGenerator(liElement);
        $('ul').append(liElement);

        if(index % 3 === 0){
            liElement.on('click',  function(){
                const r = randomNumber();
                const g = randomNumber();
                const b = randomNumber();
                let background = `rgb(${r},${g},${b})`;
            
                $(this).css("background-color", `${background}`)
            })
        }
    }
}

$('ul').on('click', '.delete', delateElement);
createElementsList();