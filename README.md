Preguntas analíticas

    ¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal para cada computador?
    Se ahorra código y se evita repetir la misma estructura. Además, la función constructora permite crear objetos estandarizados de forma práctica y ordenada.

    ¿Por qué un método interno puede acceder a las propiedades de su propio objeto mediante la palabra clave this?
    this hace referencia al objeto actual. Así, el método puede consultar o modificar sus propiedades específicas sin afectar las de otros objetos.

    ¿Qué ventajas de cohesión presenta que el objeto conozca su propio estado lógico (por ejemplo, si aprobó o no)?
    La lógica relacionada con el estado queda dentro del objeto que contiene la información necesaria. Esto facilita la comprensión y el mantenimiento del código, y evita duplicar comprobaciones en otras partes del programa.

    ¿Qué ocurriría si un libro ya prestado pudiera prestarse nuevamente sin controles internos de estado?
    El sistema no controlaría correctamente la disponibilidad del libro y podría permitir préstamos duplicados. Esto impediría saber con certeza si el libro está disponible.

    ¿Qué ventajas tiene permitir que el usuario ingrese la información en lugar de escribirla directamente en el código?
    Permite probar el programa con distintos datos y simular el uso de un sistema real. También hace que el código sea más flexible, ya que no es necesario modificarlo cada vez que cambian los datos.
