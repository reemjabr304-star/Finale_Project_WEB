$(document).ready(function () {

    /* ===== منع إدخال غير الأرقام في رقم الهاتف ===== */
    $('#userPhone').on('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    /* ===== تفعيل الرابط النشط في شريط التنقل ===== */
    $('.nav-links li a').on('click', function () {
        $('.nav-links li a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).on('scroll', function () {
        let scrollPos = $(window).scrollTop();

        $('section, .about, .menu, .gallary, .Contact').each(function () {
            let top = $(this).offset().top - 120;
            let bottom = top + $(this).outerHeight();
            let id = $(this).attr('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                $('.nav-links li a').removeClass('active');
                $('.nav-links li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    /* ===== فحص نموذج التواصل ===== */
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();

        let name = $('#userName').val().trim();
        let email = $('#userEmail').val().trim();
        let phone = $('#userPhone').val().trim();
        let message = $('#userMessage').val().trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("❌ يرجى تعبئة جميع الحقول");
            return;
        }

        if (!/^[0-9]+$/.test(phone)) {
            alert("❌ رقم الهاتف يجب أن يحتوي على أرقام فقط");
            return;
        }

        $(this).html(`
            <h2 style="color:#fac030; text-align:center;">
                شكراً لك ${name} 🌟<br>
                تم استلام رسالتك بنجاح
            </h2>
        `);
    });

});
