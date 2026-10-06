$(document).ready(function () {

    $("#texto").on("keyup", function () {

        let texto = $(this).val();
        const desplazamiento = 3;
        let textoCifrado = "";

        for (let i = 0; i < texto.length; i++){
            let letra = texto[i];

            if (letra.match(/[a-z]/i)) {
                let codigo = letra.charCodeAt(0)
                codigo += desplazamiento;

                textoCifrado += String.fromCharCode(codigo);
            }
            else {
                textoCifrado += letra;
            }
        }


        $("#resultado").val(textoCifrado)
    });

});

/*
Lógica:

1-> esperamos a que el documento esté listo
2-> cuando el user suelta una tecla en el textarea con id = "texto" -> entramos al method
3-> cogemos el texto que ha escrito el user
4-> definimos el desplazamiento a cascaporra
5-> creamos una variable para ir guardando el texto cifrado

6-> hacemos bucle for para ir recorriendo cada caracter del texto que el user ha escrito
7-> creamos una variable para ir guardando un caracter e ir sobreescribiéndola con el avance del bucle
8-> creamos condición para ignorar si es o no es capital letter, lo hacemos con match, definimos el baremo y con i deimos que las ignore

9-> creamos variable codigo para ir transformando la variable letra, que se iba iterando con el paso del bucle, para convertirla a su 
código ASCII con el método .charCodeAt(0); usamos 0 porque, según la función, es el básico y si no le indicamos nada devuelve nan
10-> sumamos el desplazamiento para que se referencie, por ejemplo, la a -> d con desplazamiento = 3 setteado

11-> creamos condición else para que en caso de que no entre en el anterior if (significaría que no ha escrito una letra el user) se quede igual
*/