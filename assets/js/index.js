const menuTombol = document.querySelector('.menu-tombol input');
const nav = document.querySelector('nav ul');

menuTombol.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

$(document).ready(function () {
    $("nav ul li a").click(function () {
        $(".anak").slideToggle("fast");

        $('nav ul li.off').each(function (index, el) {
            var anakID = el.id.split('-')[1];
            $('.anak#' + anakID).hide();
        });
    });

    $('nav').delegate('.off', 'click', function (event) {
        var pilihAnak = this.id.split('-')[1];
        console.log(pilihAnak);
        document.location.hash = pilihAnak;

        $('.anak:visible').fadeOut('slow', function () {
            $('.anak#' + pilihAnak).fadeIn('slow');
        });

        var $this = $(this);
        $this.removeClass('off').addClass("on");
        $this.siblings().addClass('off').removeClass('on');

    });
});

jQuery(document).ready(function () {

    jQuery('.progres-persentase').each(function () {
        jQuery(this).find('.progres-konten').animate({
            width: jQuery(this).attr('data-percentage')
        }, 2000);

        jQuery(this).find('.tanda-progres').animate(
            { left: jQuery(this).attr('data-percentage') },
            {
                duration: 2000,
                step: function (now, fx) {
                    var data = Math.round(now);
                    jQuery(this).find('.percent').html(data + '%');
                }
            });
    });
});