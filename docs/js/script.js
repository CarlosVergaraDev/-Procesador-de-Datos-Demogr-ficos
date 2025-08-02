// Esperamos a que todo el contenido del DOM (la página HTML) se cargue completamente.
document.addEventListener('DOMContentLoaded', () => {

    // CONSTANTES Y VARIABLES GLOBALES 

    // Definimos la cantidad máxima de edades que queremos registrar.
    const MAX_EDADES = 10;
    // Creamos un array (vector) vacío para almacenar las edades que ingrese el usuario.
    let edades = [];

    // REFERENCIAS A ELEMENTOS DEL DOM 
    // Guardamos en variables los elementos HTML con los que vamos a interactuar.
    // por que!: Esto es más eficiente que buscarlos cada vez que los necesitemos.

    // Elementos de la sección de entrada
    const seccionEntrada = document.getElementById('seccion-entrada'); // La primera sección visible.
    const tituloProgreso = document.getElementById('titulo-progreso'); 
    const inputEdad = document.getElementById('input-edad');
    const btnAgregar = document.getElementById('btn-agregar');
    const mensajeError = document.getElementById('mensaje-error');
    const contenedorEdades = document.getElementById('contenedor-edades-ingresadas'); // El div para las "píldoras".

    // Elementos de la sección de resultados
    const seccionResultados = document.getElementById('seccion-resultados'); // La segunda sección, inicialmente oculta.
    const resultadoMinima = document.getElementById('resultado-minima');
    const resultadoMaxima = document.getElementById('resultado-maxima'); 
    const resultadoPromedio = document.getElementById('resultado-promedio');
    
    
    const btnReiniciar = document.getElementById('btn-reiniciar'); // El botón "Ingresar Nuevos Datos".

    // FUNCIONES

    // Función principal que se ejecuta al hacer clic en "Añadir".
    // Se encarga de validar la entrada y agregar la edad al array.

    function agregarEdad() {
        // Obtenemos el valor del input y lo convertimos a un número entero.
        const edadTexto = inputEdad.value;
        const edadNum = parseInt(edadTexto);

        // Validamos la edad.
        // `isNaN` comprueba si el valor NO es un número.
        if (isNaN(edadNum) || edadNum < 1 || edadNum > 120) {
            // Si la validación falla, mostramos un mensaje de error.
            mensajeError.textContent = 'Error: Por favor, ingrese una edad válida entre 1 y 120.';
            // Y detenemos la ejecución de la función.
            return;
        }

        // Si la validación es correcta, limpiamos cualquier mensaje de error previo.
        mensajeError.textContent = '';
        // Añadimos la edad validada a nuestro array de edades.
        edades.push(edadNum);
        
        // Actualizamos la interfaz para mostrar la nueva edad y el progreso.
        actualizarVistaEntrada();

        // Comprobamos si ya hemos alcanzado el número máximo de edades.
        if (edades.length === MAX_EDADES) {
            // Si es así, procesamos los datos y mostramos el dashboard de resultados.
            procesarYMostrarResultados();
        }
    }

    // Actualizamos la interfaz de entrada después de añadir una edad

    function actualizarVistaEntrada() {
        // Limpiamos el campo de entrada para que el usuario pueda escribir la siguiente edad.
        inputEdad.value = '';
        // Ponemos el foco de nuevo en el campo de entrada para mayor comodidad.
        inputEdad.focus();

        // Creamos una nueva "píldora" para la edad que acabamos de añadir.
        const pildora = document.createElement('div'); 
        pildora.className = 'pildora'; 
        pildora.textContent = edades[edades.length - 1]; // Le ponemos como texto la última edad añadida.
        contenedorEdades.appendChild(pildora); // Añadimos la píldora al contenedor.
        
        // Actualizamos el título que muestra el progreso.
        const siguienteNumero = edades.length + 1;
        tituloProgreso.textContent = `Introduce la Edad ${siguienteNumero} de ${MAX_EDADES}`;
    }

    // OJO CALCULO CENTRALIZADO: Realizamos todos los cálculos estadísticos y actualizamos el dashboard de resultados.

    function procesarYMostrarResultados() {
        // 1. Ocultamos la sección de entrada y mostramos la de resultados.
        seccionEntrada.classList.add('seccion-oculta');
        seccionResultados.classList.remove('seccion-oculta');
        
        // 2. Inicializamos TODAS nuestras variables de cálculo a cero.
        let sumaTotal = 0;
        let grupoMenores = 0;
        let grupoMayores = 0; // Este es el grupo exclusivo de 18 a 59 años.
        let grupoAdultosMayores = 0;

        // 3. Recorremos el array de edades UNA SOLA VEZ para hacer todos los cálculos.
        for (const edad of edades) {
            // Acumulamos la suma para el promedio.
            sumaTotal += edad;
            
            // Clasificamos cada edad en su grupo EXCLUSIVO. Esto es lo más importante.
            if (edad >= 60) {
                grupoAdultosMayores++;
            } else if (edad >= 18) {
                grupoMayores++;
            } else {
                grupoMenores++;
            }
        }

        // ACTUALIZACIÓN DEL DOM
        // Ahora que tenemos TODOS los datos correctos, actualizamos la interfaz.

        // Actualizamos las tarjetas de métricas.
        resultadoMinima.textContent = Math.min(...edades);
        resultadoMaxima.textContent = Math.max(...edades);
        resultadoPromedio.textContent = (sumaTotal / edades.length).toFixed(2);
    }


    // Reiniciamos la aplicación a su estado inicial para un nuevo cálculo.

    function reiniciarAplicacion() {
        // Reseteamos el array de edades a un array vacío.
        edades = [];
        // Limpiamos el contenedor de las píldoras de edad.
        contenedorEdades.innerHTML = '';
        
        // Ocultamos la sección de resultados y mostramos la de entrada.
        seccionResultados.classList.add('seccion-oculta');
        seccionEntrada.classList.remove('seccion-oculta');

        // Restauramos el título de progreso inicial.
        tituloProgreso.textContent = `Introduce la Edad 1 de ${MAX_EDADES}`;
        // Limpiamos cualquier posible mensaje de error.
        mensajeError.textContent = '';
    }

    // ASIGNACIÓN DE EVENTOS
    // Le decimos al botón "Agregar" que ejecute la función `agregarEdad` cuando se le haga clic.
    btnAgregar.addEventListener('click', agregarEdad);

    // Le decimos al botón "Reiniciar" que ejecute la función `reiniciarAplicacion` cuando se le haga clic.
    btnReiniciar.addEventListener('click', reiniciarAplicacion);

    // Permite que el usuario presione "Enter" en el campo de texto para añadir la edad.
    inputEdad.addEventListener('keyup', (event) => {
        //  clave 'Enter'.
        if (event.key === 'Enter') {
            // Si se presiona Enter, simulamos un clic en el botón "Agregar".
            btnAgregar.click();
        }
    });

});
