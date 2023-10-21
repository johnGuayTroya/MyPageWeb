$(document).ready(function()
{
    //con esta asignacion consigo todos los elementos span dentro del id entrenamiento
	// const spansE= $("#entrenamiento span");
    // alert(spansE.length);

    $(".vid").slideToggle();

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

$("#playVideo").on({ 
    click:function(){ $(".vid").slideToggle(100); },
});
 
});