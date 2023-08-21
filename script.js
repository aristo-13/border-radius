

let input = document.getElementById("b-rad");
let box = document.querySelector('.box');
let cornerRad1 = '0';
let cornerRad2 = '0';
let cornerRad3 = '0';
let cornerRad4 = '0';

input.addEventListener('input', () => {
    let val = input.value;
    box.style.borderRadius = `${val}%`;
    copy.value =  `border-radius: ${val}%;`
});

let corners = document.querySelectorAll('.corners input');

corners.forEach((el, index) => {
    el.addEventListener('input', () => {
        if (index === 0) {
            cornerRad1 = el.value;
        } else if (index === 1) {
            cornerRad2 = el.value;
        } else if (index === 2) {
            cornerRad3 = el.value;
        } else if (index === 3) {
            cornerRad4 = el.value;
        }

        changerad();
    });
});


let copy = document.getElementById('copy')
function changerad() {
    box.style.borderTopLeftRadius = `${cornerRad1}%`;
    box.style.borderTopRightRadius = `${cornerRad2}%`;
    box.style.borderBottomLeftRadius = `${cornerRad3}%`;
    box.style.borderBottomRightRadius = `${cornerRad4}%`;
    copy.value = `border-radius: ${cornerRad1}% ${cornerRad2}% ${cornerRad3}% ${cornerRad4}%;`
}

copy.addEventListener('click', () =>{
    navigator.clipboard.writeText(copy.value)
    let pop = document.querySelector('.pop')
    pop.style.display = 'block'
    setTimeout(() =>{
      pop.style.display = 'none'
    }, 1000)    
})