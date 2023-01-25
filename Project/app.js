let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('.nav__list a');
function activeLink(li) {
    lists.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
lists.forEach((item) =>
    item.addEventListener('click', function () {
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = +sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`);
            activeLink(target);
        }
    })
};



