function showMenu () {
    console.log('klik');
    $('.headerMain__nav').toggleClass('showMenu')
}


$('.burgerBtn').on('click', showMenu);