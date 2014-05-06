$(window).load(function(){

    //Probamos si el navegador soporta el elemento canvas.
    //Lo ponemos falso, pues aún no usaremos el canvas.
    var soportaCanvas = false;

    var diapositivas = $('#presentacion li'),
        actual = 0,
        presentacion = {width:0,height:0};

	//Usamos setTimeout para hacer asíncrona la ejecución, para hacer mejor uso del CPU.
    setTimeout(function(){

        $('#presentacion .flecha').click(function(){
            var li            = diapositivas.eq(actual),
                canvas        = li.find('canvas'),
                siguienteIndice    = 0;

            //Calculamos el siguiente índice.
            if($(this).hasClass('siguiente')){
                siguienteIndice = actual >= diapositivas.length-1 ? 0 : actual+1;
            }
            else {
                siguienteIndice = actual <= 0 ? diapositivas.length-1 : actual-1;
            }

                    var siguiente = diapositivas.eq(siguienteIndice);

            //El navegador soporta canvas (no lo usamos por el momento)
            if(soportaCanvas){
            }
            else { //El navegador no soporta canvas
                actual=siguienteIndice;
                siguiente.addClass('imagenActiva').show();
                li.removeClass('imagenActiva').hide();
            }
        });

    },100);

});