const faqLink = document.querySelectorAll('a.faq-box__item__link'),
    thisYear = document.getElementById('thisYear'),
    menuTrigger = document.getElementById('menu-trigger'),
    body = document.querySelector('body'),
    mobileMenu = document.querySelector('.mobile-navigation');


    menuTrigger.addEventListener('click', toggleMobileMenu)

    function toggleMobileMenu(e) {
        e.preventDefault()
        body.classList.toggle('menu-open')
        if(!body.classList.contains('menu-open')) {
            mobileMenu.classList.add('close-menu')
            setTimeout(function(){
                mobileMenu.classList.remove('close-menu')
            },450)
        }
    }

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

thisYear.innerHTML = new Date().getFullYear()