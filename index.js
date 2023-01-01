const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener ('click', function (){
    alert(' ¿Le intentaste dar que no cbrona?🤨 bueno !Feliz año nuevo muñeca¡ T amo muchisimo, ya quiero verte para comerte a besos como si fueras un mojito corazon🤤 y para ir a comer los tacos de pastor que mencione cuando comenzamos a hablar juntos chiquilla')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})