<?php

    class conexion{
        function con(){
            $host="127.0.0.1";
            $db="database";
            $servidor="sa";
            $pass="pacochato";
            $puerto=1433;

            try{

                $con = new PDO("sqlsrv:Server=$host,$puerto;Database=$db",$servidor,$pass);
                echo "conexión lograda:D";

            }catch(PDOException $nono){
                echo "no se hizo la conexión :( $db, error: $nono";
            }

            return $con;
        }
    }
    
?>