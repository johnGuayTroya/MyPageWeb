
function videoHandler(){
    $("#playVideo").on({ 
        click:function(){ 
            const imgSrcCarPic  = $(".carPic img").attr("src");
            if(imgSrcCarPic !== ''){ //si la imagen se está mostrando la ocultamos
                $(".vid").slideToggle(100);
                $(".carPic").slideToggle(100);
                $(".carPic img").attr("src", '');
            }else if(imgSrcCarPic === ''){
                $(".vid").slideToggle(100); 
            }
        },
    });
}

function imageCarouselHandler(){
    const corouselItems = $(".carousel-item").length;
    //console.log("Num de etiquetas con clase 'carousel-item':", count);
    for(let i = 1 ; i < corouselItems ; ++i){
        $("#carousel_img"+i).on({
            click: function() {
                // obtenemos el valor del atributo src de la imagen original
                const imgSrc        = $("#carousel_img"+i+ " img").attr("src");
                const imgSrcCarPic  = $(".carPic img").attr("src");

                if ($(".vid").is(":visible")) { //ocultamos el div del video si esta visible
                    $(".vid").slideToggle(100);
                }

                if(imgSrcCarPic === ''){
                    // Asignamos el valor obtenido al atributo src de la imagen en .carPic
                    $(".carPic img").attr("src", imgSrc);
                    $(".carPic").slideToggle(100);
                }else if (imgSrcCarPic !== '' && imgSrc !== imgSrcCarPic){ 
                    $(".carPic img").attr("src", imgSrc); // caso en el que cambiamos de imagen por otra del carousel
                }else if (imgSrc === imgSrcCarPic){ //cerramos toggle
                    $(".carPic").slideToggle(100);
                    $(".carPic img").attr("src", '');
                }
            },
        });
    }
}

function animationHandler(){
    $(".titleContainer span").on({
        mouseenter:function(){
         $(this).css("animation-duration","1s");
         $(this).css("animation-name","spanAnimUp");
        },
        mouseleave:function(){
         $(this).css("animation-duration","0.5s");
         $(this).css("animation-name","spanAnimD");
        },
    });
  
    let clickBrain=0;
    $("#brain").on({
        click:function(){
            if(clickBrain == 2){
                $(this).css("transform","scale(1)");
                window.open('https://github.com/johnGuayTroya/ECYM',"_self");
                clickBrain=0;
            }
            $(this).css("transform","scale(1."+clickBrain+1+")");
            clickBrain++;
        },
        mouseleave:function(){ $(this).css("transform","scale(1)"); clickBrain=0; },
    });    
}

function carouselHandler(){
    /*
    Carousel
    */
    $('#carousel-example').on('slide.bs.carousel', function (e) {
        /*
            CC 2.0 License Iatek LLC 2018 - Attribution required
        */
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;
    
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; ++i) {
                // append slides to end
                if (e.direction=="left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
}

$(document).ready(function(){
    //con esta asignacion consigo todos los elementos span dentro del id entrenamiento
	// const spansE= $("#entrenamiento span");
    // alert(spansE.length);

    let pageLoad = false;
    if(pageLoad !== true){
        $(".vid").slideToggle();
        $(".carPic").slideToggle();
        pageLoad = true;
    }
    
    videoHandler();
    animationHandler();    
    carouselHandler();
    imageCarouselHandler();
});