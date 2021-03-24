$(document).ready(function() {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });


    // Hover du button
    $(".section_presentation .pres_footer a").hover(function(event) {
        $(event.target).toggleClass("hover");
        $(event.target).toggleClass("nohover");
        $(event.target).removeClass("btn-primary")
    });

    $(".hover_perso").hover(
        function() { $(this).addClass("nohover"); },
        function() { $(this).removeClass("nohover"); }
    );

    // $("div").hover(
    //     function() { $(this).css("background-color", "lightBlue"); },
    //     function() { $(this).css("background-color", "#fff"); }
    // );

    $(".hover_perso").mouseleave(function(event) {
        if (event.target.hasClass("nohover"))
            $(event.target).removeClass("nohover");
    });


    $("#parent_menu a").click(function(event) {
        let submenu = $(".sub_menu").children();
        // let menu = $(".parent_menu").children();

        // $(menu).each(function(index, item) {
        //     if ($(item).hasClass("active"))
        //         $(item).removeClass("active")
        // });

        $('[data-toggle="sticky-onscroll"]').addClass("is-sticky")


        $(submenu).each(function(index, item) {
            $(item).addClass("hide");
        });
        // console.log(event)
        // $(event.currentTarget).addClass("active")

        if (event.target.innerText == "Acceuil")
            $(submenu[0]).removeClass("hide");
        else if (event.target.innerText == "Département")
            $(submenu[1]).removeClass("hide");
    });
});