# Randomize

## Generador de datos sintéticos para bases de datos MySQL

* Alexis Rodríguez Casañas

## Descripción del proyecto

#### Generación de datos

Al desarrollar un proyecto, habitualmente se necesita un conjunto de datos para observar y testear el comportamiento de la aplicación. Es habitual que aún
estos datos no estén disponibles o al menos no en la cantidad necesaria. Por ejemplo, si desarrollamos una estación metereológica que mida la temperatura
y muestre la evolución de la misma a lo largo de un año, al inicio del proyecto no tendremos datos. Necesitaremos obtener o generar de forma artificial
esos datos para poder testear y desarrollar el sistema.

#### Datos con sentido

No basta con llenar la base de datos con valores aleatorios sin más, sino que los datos pueden necesitar de cierto comportamiento. Volviendo al ejemplo
de la estación metereológica, el dato *Temperatura* debería variar a lo largo del día, pero no tendría sentido que a las 14:00 hicieran 16ºC y a las 23:00
el valor fuese de 29ºC. Tampoco tendría sentido que el termómetro marcase 20ºC a una determinada hora, 15ºC a la siguiente y 25ºC una hora más tarde.
La temperatura debería seguir, por ejemplo, un patrón sinusoidal, donde la temperatura difiriese ligeramente de la medida anterior y posterior, y con
una amplitud y frecuencia de onda que hiciese que los valores más altos se diesen durante las horas centrales del día y los más bajos durante la madrugada.
Esto es solo un ejemplo simplificado para explicar el concepto de datos sintéticos.

#### ¿Qué hace Randomize?

Randomize ofrece una interfaz que permite generar esquemas MySQL, pero también rellenar estos esquemas con una serie de datos que pueden seguir determinados
patrones e incluso depender de otros datos. Por ejemplo, si las ventas de un determinado vendedor caen en un periodo de tiempo determinado, la facturación
debería caer proporcionalmente en ese mismo periodo. En definitiva, se trata de un sistema para preparar fuentes de datos listas para su uso.

## Herramientas
Randomize está desarrollado con las siguientes tecnologías:
* Back-end:
    * Servidor web: Python (Flask)
    * Módulo de cómputo: Python
* Front-end: Javascript (jQuery), HTML5(Jinja2), Bootstrap

## Opcional
Dependiendo del tiempo disponible para el proyecto, Randomize podría utilizar el estándar MPI para computación paralela de alto rendimiento, utilizando
todos los núcleos disponibles de la máquina para calcular los datos y reducir drásticamente el tiempo de cómputo.

