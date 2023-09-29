const paragrafos = document.querySelector('.paragrafos');
const allP = paragrafos.querySelectorAll('p');


const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of allP) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}
