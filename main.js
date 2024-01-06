<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- css file -->
    <link rel="stylesheet" href="styles.css">
    <!-- Include SweetAlert from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>

<!-- menu on top -->
<header class="bg-dark fixed-top">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p class="text-white">MATH.RANDOM PSW generator.</p>
            </div>
            <div class="col-md-6 text-right">
                <nav>
                    <a href="explicacion.html" class="text-white">MENU</a>
                    <a href="display.html" class="text-white">LISTADO</a>
                    <a href="index.html" class="text-white">GENERADOR</a>
                </nav>
            </div>
        </div>
    </div>
</header>

<main class="container mt-5">
    <p class="lead">Ingrese los datos relacionados a la contraseña para almacenarlos</p>
    
<!-- multiple inputs-->
    <div class="form-group">
        <label for="nombreUsuario">Nombre de Usuario:</label>
        <input type="text" class="form-control" id="nombreUsuario" placeholder="Ingrese su nombre de usuario">
    </div>

    <div class="form-group">
        <label for="nombrePlataforma">Nombre de Plataforma:</label>
        <input type="text" class="form-control" id="nombrePlataforma" placeholder="Ingrese el nombre de la plataforma">
    </div>

    <div class="form-group">
        <label for="mail">Mail:</label>
        <input type="text" class="form-control" id="mail" placeholder="Ingrese su correo electrónico">
    </div>

    <div class="form-group">
        <label for="cant_caracters">Cantidad de caracteres:</label>
        <input type="text" class="form-control" id="cant_caracters" placeholder="Ingrese la cantidad de caracteres para la contraseña">
    </div>
    
    <div class="form-group">
        <label for="outputField">Output:</label>
        <textarea class="form-control" id="outputField" rows="4" readonly placeholder="aqui aparecera la contraseña generada"></textarea>
    </div>
<!-- buttons -->    
    <button class="btn btn-success" onclick="crear_contraseña()">Crear Contraseña</button>
    <button class="btn btn-primary" onclick="copyContent()">Copiar contraseña</button>
    <button class="btn btn-info" onclick="makeAsyncCall()">generar contrasenia y guardar datos</button>
</main>

<!-- Include Bootstrap JS and Popper.js -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

<!-- Include scripting file -->
<script src="main.js"></script>
</body>
</html>

