<?php
    header('Content-Type: application/json'); //tipos MIME
    include_once('../../class/class-empresa.php');
    require_once('../../class/class-database.php');
    
    $database = new Database();

    $u = new Empresa(
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada',
        'asdadada'
        
        );
        echo $u->crearEmpresa($database->getDB());  
    
if ($_SERVER['REQUEST_METHOD'] =='POST'){
    
   
         
}

?>