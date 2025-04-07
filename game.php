<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
</head>

<body>
    <h1 id="title"></h1>
    <table>
        <tbody id="game">

        </tbody>
    </table>
</body>
<script src="verbos.js"></script>
<script>
    let arrVerbos = getVerbos();

    game01(arrVerbos);
</script>
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

</html>