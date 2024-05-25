// -----------------------------------------------------------------

// SCROLL PROGRESS BAR Y MOVIMIENTO DEL HEADER

window.onscroll = function(){
    scrollProgressBar();
    navFunction();
    prodListHide()
}


let progress = document.getElementById('progress-bar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
const scrollProgressBar = () => {
    let progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = `${progressWidth}` + "%";
}

const header = document.getElementById('header')
let ubicacionPrincipal = window.pageYOffset;
const navFunction = () => {
    let desplazamientoActual = window.pageYOffset;
    {if (ubicacionPrincipal >= desplazamientoActual){
        header.style.top = '0';
    }
    else{
        header.style.top = '-5rem';

    }}
    ubicacionPrincipal = desplazamientoActual;
}

const prodList = document.getElementById('lista-productos')
const prodListHide = () => {
    if(prodList.classList.contains('show')) {
        prodButton.click()
    }
}


// -----------------------------------------------------------------

// MENU DESPLEGABLE Y CIERRE AL HACER CLICK AFUERA

let check1 = document.getElementById('check');
let check2 = document.getElementById('check-sub');

check1.addEventListener('click', () => {
    if (check1.checked == false & check2.checked) {
        check2.click()
    }
})

const menuDesplegable = document.getElementById('menu-desplegable')

menuDesplegable.addEventListener('click', () => {
    if (check2.checked) {
        check2.click();
    }
});

const main = document.getElementById('main')
const footer = document.getElementById('footer')

main.addEventListener('click', () => {
    if (check1.checked) {
        check1.click();
    }
});

footer.addEventListener('click', () => {
    if (check1.checked) {
        check1.click();
    }
});

check1.addEventListener('click', () => {
    if(check1.checked) {
        main.style.filter = 'brightness(0.2)'
        footer.style.filter = 'brightness(0.2)'
    }
    else {
        main.style.filter = 'brightness(1)'
        footer.style.filter = 'brightness(1)'
    }
})

// -----------------------------------------------------------------

// CERRAR EL MENÚ DESPLEGABLE AL HACER CLICK EN ALGÚN ITEM

const menuLink1 = document.getElementById('menu-link1');
const menuLink2 = document.getElementById('menu-link2');
const menuLink3 = document.getElementById('menu-link3');
const menuLink4 = document.getElementById('menu-link4');
const menuLink5 = document.getElementById('menu-link5');
const menuLink6 = document.getElementById('menu-link6');


menuLink1.addEventListener('click', () => {
    document.getElementById("check").click();
})
menuLink2.addEventListener('click', () => {
    document.getElementById("check").click();
})
menuLink3.addEventListener('click', () => {
    document.getElementById("check").click();
})
menuLink4.addEventListener('click', () => {
    document.getElementById("check").click();
})

// -----------------------------------------------------------------

const prodButton = document.getElementById('boton-productos')


prodButton.onclick = () => {
    prodList.classList.toggle('show')
    
    if(prodList.classList.contains('show')) {
        prodButton.style.transform = 'rotate(270deg)'
        prodButton.style.filter = 'invert(1)'
        prodButton.style.boxShadow = '0 0 0 2px #161821'
    }
    else {
        prodButton.style.transform = 'rotate(90deg)'
        prodButton.style.filter = 'invert(0)'
        prodButton.style.boxShadow = 'none'
    }
}

main.addEventListener('click', () => {
    if (prodList.classList.contains('show')) {
        prodButton.click()
    }
})

footer.addEventListener('click', () => {
    if (prodList.classList.contains('show')) {
        prodButton.click();
    }
});


// -----------------------------------------------------------------

// CAMBIO DEL DISPLAY EN LA HISTORIA DE LOS PRODUCTOS

const flechaAbajo = () => {
    document.getElementById('mostrar').style.display = 'block';
    document.getElementById('flecha-abajo').style.display = 'none';
}

const flechaArriba = () => {
    document.getElementById('mostrar').style.display = 'none';
    document.getElementById('flecha-abajo').style.display = 'block';
}

// -----------------------------------------------------------------


// window.sr = ScrollReveal();

//     sr.reveal('.empresa__title', {
//         duration: 2000,
//         opacity: 0,
//     });
//     sr.reveal('.informacion__contenido--nosotros', {
//         delay: 300,
//         duration: 3000,
//         origin: 'left',
//         distance: '80px',
//         opacity: 0,
//     });
//     sr.reveal('.informacion__contenido--productos', {
//         delay: 300,
//         duration: 3000,
//         origin: 'right',
//         distance: '80px',
//         opacity: 0
//     });
//     sr.reveal('.informacion__contenido--servicios', {
//         duration: 3000,
//         origin: 'bottom',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-servicios', {
//         duration: 3000,
//         origin: 'bottom',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-servicios__contenido', {
//         duration: 2000,
//         origin: 'bottom',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.productos__title', {
//         delay: 1000,
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item1', {
//         duration: 1000,
//         origin: 'right',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item2', {
//         duration: 1200,
//         origin: 'right',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item3', {
//         duration: 1400,
//         origin: 'right',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item4', {
//         duration: 1600,
//         origin: 'right',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item5', {
//         duration: 1600,
//         origin: 'left',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item6', {
//         duration: 1400,
//         origin: 'left',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item7', {
//         duration: 1200,
//         origin: 'left',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.grilla-productos__item--item8', {
//         duration: 1000,
//         origin: 'left',
//         distance: '50px',
//         opacity: 0
//     });
//     sr.reveal('.equipo__title', {
//         delay: 100,
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.bio--bio1', {
//         delay: 100,
//         rotate:{
//             y: 180,
//             z: 20
//         },
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.bio--bio2', {
//         delay: 200,
//         rotate:{
//             y: 180,
//             z: 20
//         },
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.bio--bio3', {
//         delay: 300,
//         rotate:{
//             y: 180,
//             z: 20
//         },
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.bio--bio4', {
//         delay: 400,
//         rotate:{
//             y: 180,
//             z: 20
//         },
//         duration: 2000,
//         opacity: 0
//     });
//     sr.reveal('.main-container__logo', {
//         duration: 2000,
//         opacity: 0
//     });
