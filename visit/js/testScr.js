$(document).ready(function() {
    
jQuery(function($){
   $("#inputTel").mask("(999) 999-9999");
});
    
    $('form').submit(function(event){
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    });
    
    
    $('form').submit(function(event){
    if ($("#inputTel").val() == "" || $("#inputEmail3").val() == "" ){
        event.preventDefault();
        alert("Заполните пустые окна для вводов");
    }
    });
    
    
    new WOW().init();

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
    
    $('.ska').click(function(){
        $("p").show(2000);
        $(".main1").height(570);
        
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

var isInViewport = function (elem) {
            var distance = elem.getBoundingClientRect();
            return (
                distance.top >= 0 &&
                distance.left >= 0 &&
                distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                distance.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        var findMe = document.querySelector('.counter-start');

        window.addEventListener('scroll', function (event) {
            if (isInViewport(findMe)) {
                setTimeout(function () {
                    odometer3.innerHTML = 2409;
                    odometer4.innerHTML = 228;
                    odometer5.innerHTML = 1488;
                    odometer6.innerHTML = 42;
                }, 100);
            }
        }, false);

var delay_popup = 2000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

