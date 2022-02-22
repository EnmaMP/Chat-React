<?php
        $dominioPermitido="http://localhost:3000";
        header("Access-Control-Allow-Origin:$dominioPermitido");
        header("Access-Control-Allow-Headers:content-type");
        header("Access-Control-Allow-Methods:DELETE,GET,PUT,POST,DELETE");

    try{//php encargado de registrar un nuevo usuario con nombre y contraseña (REGISTRARSE)

        $usuarioBuscado=json_decode(file_get_contents("php://input"));
        $UserBD=$usuarioBuscado->nombreUser;
        $ContraseniUserBD=$usuarioBuscado->contraseniaUser;

        $dsn = "mysql:host=localhost;dbname=practicainterfacesbd";
        $dbh = new PDO($dsn, "pma","Admin987");
        $sentenciaComprobar = $dbh->prepare("SELECT Usuario FROM usersregistrados ");
        $sentenciaComprobar->execute();

        $contador=0;//contador para comprobar que no haya más usuarios con ése nombre
        while ($row = $sentenciaComprobar->fetch()){
            if($row["Usuario"]==$UserBD){//Si se encuentra un usuario con el mismo nombre se le suma 1 al contador
                $contador++;
            }
        }
        if($contador==0){//si vale 0 el contador significará que no hay más usuarios con el mismo nombre y puede usar ése nombre, devolviendo true
            echo json_encode("True"); 
            $sentencia = $dbh->prepare("INSERT INTO usersregistrados (Usuario,Contrasenia) VALUES (?,?)");
            $sentencia->bindParam(1, $UserBD);
            $sentencia->bindParam(2, $ContraseniUserBD);
            $sentencia->execute();
        }
        if($contador>0){//si vale más de 1 (aunque unicamente puede haber 1 con cada nombre), devolverá false
            echo json_encode("False");
        }
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
   
?>
