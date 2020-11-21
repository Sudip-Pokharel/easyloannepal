const faqLink = document.querySelectorAll('a.faq-box__item__link');


function removeAllActiveLink(element) {
    element.forEach(function (link) {
        link.classList.remove('active');
    })
}

faqLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        if (!link.classList.contains('active')) {
            removeAllActiveLink(faqLink);
            link.classList.add('active');
        }
        else {
            removeAllActiveLink(faqLink);
        }
    })
})