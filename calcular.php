<?php
    $producto =  $_REQUEST['producto'];   
    $precio =  $_REQUEST['valorPedido'];   
    $cantidad =  $_REQUEST['cantidad'];  
    
    echo " La info es $producto , $precio , $cantidad ";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
    <label for="producto">Producto</label>
    <output id="producto" name="producto"> 
        <?php echo $producto ?> 
    </output>

    <label for="precio">Precio</label>
    <output id="precio" name="precio">
        <?php echo $precio ?>
    </output>

    <label for="cantidad">Nombre del cliente</label>
    <output id="cantidad" name="cantidad">
    <?php echo $cantidad ?>
    </output>
    </form>
</body>
</html>