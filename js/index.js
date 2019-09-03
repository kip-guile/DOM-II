// Your code goes here
const links = document.querySelectorAll('a');
const introH = document.querySelector('.intro h2')
const body = document.body;
const button = document.querySelectorAll('.btn');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        console.log('I am hovering');
        link.setAttribute("style", "color: gold; background-color: purple; padding: 2px; margin: 3px;");
    });
    link.addEventListener('mouseleave', () => {
        console.log('I have left');
        link.setAttribute("style", "color: ''; background-color: ''; padding-bottom: 2px; margin: 3px;");
    });
});

body.addEventListener('keydown', () =>{
    console.log('KEY DOWN!!!');
    introH.textContent = "STOP PUSHING KEYS!"
});

body.addEventListener('wheel', (event) => {
    console.log('On and on, the wheel turns...');
    button.forEach(buttn =>{
        buttn.style.backgroundColor = 'purple';
    })
})