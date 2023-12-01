let loadMoreBtn1 = document.querySelector('#load-more-1');
let loadMoreBtn2 = document.querySelector('#load-more-2');
let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItems1 = 4;
let currentItems2 = 4;
let currentItems3 = 4;


loadMoreBtn1.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (let i = currentItems1; i < currentItems1 + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'inline-block';
        }
    }
    currentItems1 += 4;

    
    if (currentItems1 >= elementList.length) {
        event.target.style.display = 'none';
    }
}
);

loadMoreBtn2.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (let i = currentItems1; i < currentItems1 + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'inline-block';
        }
    }
    currentItems2 += 4;

    
    if (currentItems2 >= elementList.length) {
        event.target.style.display = 'none';
    }
}
);


loadMoreBtn3.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (let i = currentItems1; i < currentItems1 + 4; i++) {
        if (elementList[i]) {
            elementList[i].style.display = 'inline-block';
        }
    }
    currentItems3 += 4;

    
    if (currentItems3 >= elementList.length) {
        event.target.style.display = 'none';
    }
}
);

