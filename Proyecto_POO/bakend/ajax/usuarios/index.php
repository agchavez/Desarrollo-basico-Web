<?php
    header('Content-Type: application/json'); //tipos MIME
    include_once('../../class/class-empresa.php');
    require_once('../../class/class-database.php');
    
    $database = new Database();
    
if ($_SERVER['REQUEST_METHOD'] =='POST'){
    $u = new Empresa(
        $_POST['Name'],
        $_POST['email'],
        $_POST['password'],
        $_POST['descripcion'],
        $_POST['mision'],
        $_POST['vision'],
        $_POST['telefono'],
        array($_POST['tiporedsocial0'] => $_POST['redsolcial0'],
            $_POST['tiporedsocial1'] => $_POST['redsolcial1'],
            $_POST['tiporedsocial2'] => $_POST['redsolcial2'],
            $_POST['tiporedsocial3'] => $_POST['redsolcial3']),
        $_POST['direccion'],
        $_POST['banner'],
        $_POST['logo'],
        $_POST['contry'],
        $_POST['state'],
        array(
            'Longitud' => $_POST['longitud'],
            'Latitud' => $_POST['latitud']
        )
        );
    echo $u->crearEmpresa($database->getDB());        
}

?>