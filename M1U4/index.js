
     const textoPrompt = prompt("Ingresar metros a recorrer:", '') ;

     var transporte = '' ;
     
     if (textoPrompt >= 0 && textoPrompt <= 1000) {
         transporte = 'a pie';
    }else if (textoPrompt > 1000 && textoPrompt <= 10000) {
         transporte = 'en bicicleta';
    }else if(textoPrompt > 10000 && textoPrompt <= 30000){
         transporte = 'en colectivo';
    }else if (textoPrompt > 30000 && textoPrompt <= 100000){
         transporte = 'en auto';
    }else if (textoPrompt > 100000){
         transporte = 'en avión';
    }

    
    document.write(`Si la distancia por recorrer es ${textoPrompt} metros. Se debe viajar ${transporte}.`); 