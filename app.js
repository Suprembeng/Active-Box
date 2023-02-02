

$ (function() {
    // ====fixed header====
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight(); // рассчет высоты блока

    let scrollPos = $(window).scrollTop(); // позиция скрола

    $(window).on('scroll load resize', function() {
        scrollPos = $(this).scrollTop();
        let introH = intro.innerHeight();

        if(scrollPos > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');

        }

        
    });

    console.log(introH);
    header.addClass('fixed');

    // ====smooth scroll====
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault(); // ====отмена стандартного поведения ссылки====

        let elementID = $(this).data('scroll'); // ====получение id элемента====

        let elementOffset = $(elementID).offset().top; // ====получение отступа от верха====

        nav.removeClass('show'); // ====автомат скрытие меню====

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700) // ====скорость прокрутки====

    }); 
    
    // ====navToggle====
        let nav = $('#nav');
        let navToggle = $('#navToggle');

        navToggle.on('click', function(event){
            event.preventDefault();

            nav.toggleClass('show');

        });


});


