const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


function showContent(index) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
    });

    const contentTexts = document.querySelectorAll('.content-text');
    contentTexts.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}
