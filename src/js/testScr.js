$(document).ready(function(){
 
    let options = {threshold : [0.5]}; //срабатывает когда пролистываем 0.5 блока
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation'); //для всех элементов с классом element-animation сработает скрипт
    elements.each((i, el)=>{
        observer.observe(el);
    }); //теперь нужна функция onEntry- наш обработчик-
    
});

function onEntry(entry){ //доб-м ф-ю nEntry
    entry.forEach(change => { //доб-м change
        if (change.isIntersecting){ //проверим попал ли наш наблюдательный элемент IntersectionObserver и если да, то добавляем новый класс show-animation
            change.target.add('show-animation');
        }
    });
}

/**$(window).scroll())=> {
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) =>{
        if($(el).offset().top) - $("nav").outerHeight() <= scrollDistance) {
            $("nav a").each(e, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});

