<?php
        $dominioPermitido="http://localhost:3000";
        header("Access-Control-Allow-Origin:$dominioPermitido");
        header("Access-Control-Allow-Headers:content-type");
        header("Access-Control-Allow-Methods:DELETE,GET,PUT,POST,DELETE");

    try{//php encargado de insertar en la base de datos el mensaje del Usuario correspondiente (INSERT MENSAJE+USER)
        
        $chatDB=json_decode(file_get_contents("php://input"));//recojo la variable con los datos del usuario
        
        $UserBD=$chatDB->usuarioDelMensaje;//guardo el usuario y su mensaje en 2 variables
        $UserMensajeBD=$chatDB->valueChat1;
        
        $dsn = "mysql:host=localhost;dbname=practicainterfacesbd";
        $dbh = new PDO($dsn, "pma","Admin987");
        //establezco la conexión e inserto
        $sentencia = $dbh->prepare("INSERT INTO mensajes2 (MensajesChat,Usuario) VALUES (?,?)");
        $sentencia->bindParam(1, $UserMensajeBD);
        $sentencia->bindParam(2, $UserBD);
        $sentencia->execute();
    }
    catch(PDOException $ex){
        echo $ex->getMessage();
    }
?>