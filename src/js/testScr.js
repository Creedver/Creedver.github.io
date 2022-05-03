$(document).ready(function() {

    $(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $(".section").each((i, el) => {
        
        if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
          $("nav a").each((i, el) => {
            if ($(el).hasClass("active")) {
                $(el).removeClass("active");
             }
          }); 
          $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver (onEntry,options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });  
    $(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
});


function onEntry(entry) {
    entry.forEach(change =>{
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
    });
}


$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

