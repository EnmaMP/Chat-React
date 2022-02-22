<?php
    try {
        $dsn = "mysql:host=localhost;dbname=practicainterfacesbd";
        $dbh = new PDO($dsn, "pma","Admin987");
}

catch(PDOException $e){
    echo $e->getMessage();
}
?>