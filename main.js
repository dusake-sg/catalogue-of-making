const container = document.querySelector('.container');
let scrollLine = document.querySelector('.scroll');

container.addEventListener('wheel', (e)=> {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
    scrollLine.style.width = container.scrollLeft / 2 + 'px';
})