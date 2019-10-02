<?php

require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
// This assumes that you have placed the Firebase credentials in the same directory
// as this PHP file.
$serviceAccount = ServiceAccount::fromJsonFile(__DIR__ . '/secret/ideale-proyecr-10339dc5f35e.json');
$firebase = (new Factory)
   ->withServiceAccount($serviceAccount)
   ->create();
$database = $firebase->getDatabase();

var_dump($database);

?>
