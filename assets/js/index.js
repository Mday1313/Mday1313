$('body').on('click', '.nav-toggle', (event) =>{
   $('body').toggleClass('nav-open');
})

$.each($('.nav__link'), (index, link) => {
    $(link).on('click', () => {
        $('body').removeClass('nav-open');
    })

  
})