jQuery(document).ready(function() {
    jQuery('.whyChooseUs').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeIn',
        offset: 300
    });

    jQuery('.dignities').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated slideInRight',
        offset: 300
    });

    jQuery('.worksAndCreative').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated fadeIn',
        offset: 300
    });

    jQuery('.gallery').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated slideInLeft',
        offset: 300
    });

    jQuery('.ourTeam').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated zoomIn',
        offset: 400
    });

    jQuery('.specialOffer').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated slideInRight',
        offset: 50
    });

    jQuery('footer').addClass("hiddenBlock").viewportChecker({
        classToAdd: 'visibleBlock animated bounce',
        offset: 300
    });
});