<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
</head>

<body>
    <form action="" method="GET">
        <h1 id="title"></h1>
        <table border="1">
            <tbody id="game">
            </tbody>
        </table>
        <br>
        <!-- Botones agregados -->
        <button type="button" onclick="reloadGame()">Recargar Juego</button>
        <button type="button" onclick="switchGame()">Cambiar Juego</button>
        <button type="button" onclick="goToIndex()">Volver a Inicio</button> <!-- Nuevo botón -->
    </form>

    <script src="verbos.js"></script>

    <?php
    if (isset($_GET["btnForm"]) && $_SERVER["REQUEST_METHOD"] === "GET") {
        $title = $_GET["btnForm"];

        switch ($title) {
            case "infinitivos":
                echo "<script src='infinitivos.js'> </script>";
                break;
            case "presente":
                echo "<script src='presente.js'> </script>";
                break;
            case "mix":
                echo "<script src='mix.js'> </script>";
                break;
        }
    }
    ?>

    <script>
        let arrVerbos = getVerbos();
        let currentGame = localStorage.getItem('currentGame') || 'game02'; // por defecto game02

        function startGame() {
            if (currentGame === 'game01') {
                game01(arrVerbos, toGuess, model);
            } else {
                game02(arrVerbos, toGuess, model);
            }
        }

        function reloadGame() {
            document.getElementById('game').innerHTML = ''; // Limpiar la tabla
            startGame(); // Vuelve a iniciar el juego actual
        }

        function switchGame() {
            currentGame = (currentGame === 'game01') ? 'game02' : 'game01';
            localStorage.setItem('currentGame', currentGame);
            location.reload(); // Recargar la página para aplicar el cambio
        }

        function goToIndex() {
            window.location.href = "index.php"; // Redirige a index.php
        }

        startGame(); // Iniciar juego cuando carga la página
    </script>

</body>

</html>
