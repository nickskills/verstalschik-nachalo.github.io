// let a = 5;
// alert(a)

// var user = {
//     'name': 'Andrey',
//     'surname': 'Ivanov'
// }
// alert(user.name)
// function user(anya, olya) {
//     alert(anya + olya)
// };
// user(10, 20);
// var header__btn = document.getElementById('header__btn');
// header__btn.onclick = function () {
//     var text = document.querySelector('.header__intro');
//     text.classList.add('red');
//     var img = document.querySelector('.header__img');
//     img.style.display = 'none';
// }

$(function () {
    $(window).scroll(function () {
        $('.form__title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 900) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function () {
        $('.time').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function () {
        $('.travel').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("fadeInUp");
            }
        });
    });
    $(window).scroll(function () {
        $('.rocket').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 850) {
                $(this).addClass("fadeInRight");
            }
        });
    });
})

