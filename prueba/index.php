<?php

require_once __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

$firebase = (new Factory)->withServiceAccount('./secret/conexion-fire-be48ca893871.json')
    ->withDatabaseUri('https://conexion-fire.firebaseio.com/')->create();

$database = $firebase->getDatabase();

$newPost = $database
    ->getReference('nombre')
    ->push([
        'firstName'=>'Juan',
        'lastName'=>'Perez',
        'birthDate'=>'12/12/2012'
    ]);

?>x

<?php
