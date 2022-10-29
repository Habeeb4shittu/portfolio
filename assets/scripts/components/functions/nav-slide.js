export function slideNav() {
    function slideNavDown() {
        $(".nav-links").slideDown(200);
        $(".nav-toggler").empty().append(` 
            <i class="fa fa-times" aria-hidden="true"></i>
        `)
    }

    function slideNavUp() {
        $(".nav-links").slideUp(200);
        $(".nav-toggler").empty().append(` 
            <i class="fa fa-bars" aria-hidden="true"></i>
        `)
    }


    let click = 1;
    $(".nav-toggler").click(() => {
        click++
        if (click % 2 == 0) {
            slideNavDown();
        } else {
            slideNavUp()
        }
    })

    $('.con-link').click(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".con-link").addClass('link')
        click++
    })
    $('.serv-link').click(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".serv-link").addClass('link')
        click++
    })
    $('.port-link').click(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".port-link").addClass('link')
        click++
    })
    $('.about-link').click(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".about-link").addClass('link')
        click++
    })
    $(document).ready(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".home-link").addClass('link')
    })
    $(".home-link").click(() => {
        $('.nav-links').find(".link").removeClass('link')
        $(".home-link").addClass('link')
        click++
    })
}