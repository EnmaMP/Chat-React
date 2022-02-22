<?php
        $dominioPermitido="http://localhost:3000";
        header("Access-Control-Allow-Origin:$dominioPermitido");
        header("Access-Control-Allow-Headers:content-type");
        header("Access-Control-Allow-Methods:DELETE,GET,PUT,POST,DELETE");

    try{//php encargado en comprobar que existe el usuario recibido en la bd con contraseña tambien correcta(LOG IN)
        
        $usuarioBuscado=json_decode(file_get_contents("php://input"));
        $UserBD=$usuarioBuscado->nombreUser;
        $ContraseniUserBD=$usuarioBuscado->contraseniaUser;

        $dsn = "mysql:host=localhost;dbname=practicainterfacesbd";
        $dbh = new PDO($dsn, "pma","Admin987");
        $sentenciaComprobar = $dbh->prepare("SELECT Usuario,Contrasenia FROM usersregistrados ");
        $sentenciaComprobar->execute();
        $contador=0;//me declaro un contador
        while ($row = $sentenciaComprobar->fetch()){//recorro la tabla
            if($row["Usuario"]==$UserBD){
                $contador++;//si el nombre de usuario coincide se suma 1
                if($row["Contrasenia"]==$ContraseniUserBD){
                    $contador++; //Si la contraseña coincide se suma 1
                }
            }
        }
        if($contador==0){//Si el contador vale 0 significa que el usuario no existe, por lo que devuelvo dicho mensaje
            echo json_encode("No existe");
        }
        if($contador==1){//Si vale 1 significa que el nombre fue encontrado pero no era su contraseña
            echo json_encode("Contrasenia erronea");
        }
        if($contador==2){//Si vale 2 es que el nombre y contraseña son correctos
            echo json_encode("True");
        }
    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
?>
