<?php
        $dominioPermitido="http://localhost:3000";
        header("Access-Control-Allow-Origin:$dominioPermitido");
        header("Access-Control-Allow-Headers:content-type");
        header("Access-Control-Allow-Methods:DELETE,GET,PUT,POST,DELETE");
    
    try{//php encargado de mostrar el chat entero (SELECT *)
        
        $dsn = "mysql:host=localhost;dbname=practicainterfacesbd";
        $dbh = new PDO($dsn, "pma","Admin987");
        $sentencia = $dbh->query("SELECT * FROM mensajes2 ");
        $sentencia->execute();
        $selectChat=$sentencia->fetchAll();
        //envio el el select entero
        echo json_encode($selectChat);
    }
    catch(PDOException $ex){
        echo $ex->getMessage();
    }
?>