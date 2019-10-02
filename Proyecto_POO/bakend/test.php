<?php
    include_once('class/class-empresa.php');
    $arreglo = array('hola','como','estas');
    $u = new Empresa('juan',$arreglo,'agchavrz@unah.hn ','chavez.25','M','ssadada','asdad','sadad','4666565','665555','sdfsfsdf','asdadada','asdadad','adsadada');
    $empresa = $u->__ToString();

    echo $empresa;
?>