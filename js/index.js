// Your code goes here
const links = document.querySelectorAll('a');
const introH = document.querySelector('.intro h2')
const body = document.body;
const button = document.querySelectorAll('.btn');
const letsGoImg = document.querySelector('.content-section img');
const advGoImg = document.querySelector('.inverse-content img');
const foot = document.querySelector('.footer');
const destH = document.querySelectorAll('.destination h4');

foot.addEventListener('dragover', e =>{
    e.preventDefault();
})

destH.forEach(dH => {
    dH.addEventListener('mouseover', () => {
        console.log('I am hovering');
        dH.setAttribute("style", "color: gold; background-color: purple; padding: 2px; margin: 3px;");
    });
    dH.addEventListener('mouseleave', () => {
        console.log('I have left');
        dH.setAttribute("style", "color: ''; background-color: ''; padding-bottom: 2px; margin: 3px;");
    });
});

body.addEventListener('keydown', () =>{
    console.log('KEY DOWN!!!');
    introH.textContent = "STOP PUSHING KEYS!"
    introH.style.color = 'red';
});

body.addEventListener('wheel', () => {
    console.log('On and on, the wheel turns...');
    button.forEach(buttn =>{
        buttn.style.backgroundColor = 'purple';
    })
})

body.addEventListener('drag', () =>{
    console.log('Alert! SOmething is being DRagged!')
    letsGoImg.setAttribute('src', 'img/fun.jpg')
    advGoImg.setAttribute('src', 'img/adventure.jpg');
})

body.addEventListener('drop', () =>{
    console.log('It has been dropped. Gratitude!!!')
    letsGoImg.setAttribute('src', 'img/adventure.jpg')
    advGoImg.setAttribute('src', 'img/fun.jpg');
})

links.forEach(link => {
    link.addEventListener('focus', (event) => {
        event.target.style.color = "purple";
    })
})