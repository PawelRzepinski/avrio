/* HEADER POSITION 
--------------------------------------------------------------------------------------*/
async function headerPosition() {
    if(($(window).scrollTop() > 350)){
        $('.header').css('transform','tranlateY(-100%)')
        $('.header').addClass('moveHeader');
    } else {
        $('.header').removeClass('moveHeader');
    }
}
$(window).on('scroll', headerPosition);

/* BURGER BTN
--------------------------------------------------------------------------------------*/
function menuVisibility() {
    $('.burger').toggleClass('burgerAnimation');
    $('.header--main').toggleClass('headerVisibility');
    $('.header__menu').toggleClass('menuVisibility');
}
$('.burger').on('click', menuVisibility);

/* CONTACT INFORMATION
--------------------------------------------------------------------------------------*/
async function contactBox() {
    const contactBox = $('.info__contact');
    if(innerWidth < 991){
        $('.info__box--mobile').prepend(contactBox);
    }
    else {
        $('.header__sideBox .info__box').prepend(contactBox);
    }
}

contactBox();