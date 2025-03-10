// JSON con los txt de las traducciones
const txtJsonLang = {
    "es": {
			"proy": "Proyectos",
			"AM": "Sobre mí",
			"ECYMd1": "ECYM es un pequeño entrenador de mecanografía, atención y memoria en el que puedes practicar o poner a prueba tus habilidades cognitivas.",
			"STd1": "Space travel es un endless runner de temática espacial 2D Inspirado en flappy birds,para obtener una buena puntuación no debes chocarte.",
			"SDd1": "Este cortometraje de animación incluye elementos reales mezclados con una estética surrealista",
			"DG": "Dr.GEndro, es un juego de puzles en el que tendremos que mover las partes de la criatura para reparar su anatomía.",
			"TR": "Tempus Runit,es un Endlees runner en 3D para Android mezclado con cuestionarios.",
			"MTd1": "Herramienta para traducir canciones,creada en c++ y vinculada con una dll a Unity3D"
			
		},
		"en": {
	
			"proy": "Projects",
			"AM": "About me",
			"ECYMd1": "ECYM is a little typing, attention and memory trainer where you can practice or test your cognitive skills",
			"STd1": "Space travel,is a space-themed 2D endless runner Inspired by flappy birds you must resist as much as possible to get a good score.",
			"SDd1": "This short animation film includes real elements mixed with a surreal aesthetic.",
			"DG": "Dr.GEndro,is a puzzle game in which you have to move the parts of the creature to repair its anatomy.",
			"TR": "Tempus Runit,is 3D Endlees runner for Android mixed with quizzes.",
			"MTd1": "Tool to translate songs, created in c ++ and linked with a dll to Unity3D"
	
		}
};

function languageSwapController() {
    // Establece el idioma inicial si no está configurado
    if (!localStorage.getItem("lang")) {
        localStorage.setItem("lang", "en");
    }
    let lang = localStorage.getItem("lang");

    // Función para traducir los elementos
    const translate = () => {
        $('.lang').each(function () {
            $(this).text(txtJsonLang[lang][$(this).attr('key')]);
        });
    };

    // Traduce al cargar la página
    translate();

    // Cambia el idioma al hacer clic en los botones
    $('.translate').click(function () {
        lang = $(this).attr('id'); 
        localStorage.setItem("lang", lang);
        translate();
    });

    // Cambia el color de los botones al hacer clic
    $("#es").click(function () {
        $(this).css("color", "#F1CA06");
        $("#en").css("color", "white");
    });
    $("#en").click(function () {
        $(this).css("color", "#F1CA06");
        $("#es").css("color", "white");
    });
}


$(document).ready(function(){
	languageSwapController();;
});