<?php
 class usuarios{
     private $fistname;
     private $lastname;
     private $email;
     private $password;
     private $genero;
     private $direccion;
     private $pais;
     private $ciudad;
     private $codigopostal;
     private $telefono;

    public function __construct(
        $fistname,
        $lastname,
        $email,
        $password,
        $genero,
        $direccion,
        $pais,
        $ciudad,
        $codigopostal,
        $telefono
    ){
        $this->fistname = $fistname;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->password = $password;
        $this->genero = $genero;
        $this->direccion = $direccion;
        $this->pais = $pais;
        $this->ciudad = $ciudad;
        $this->codigopostal = $codigopostal;
        $this->telefono = $telefono;
    }

     public function getFistname(){
          return $this->fistname;
     }
     public function setFistname($fistname)
     {
          $this->fistname = $fistname;

          return $this;
     }

     public function getLastname(){
          return $this->lastname;
     }
     public function setLastname($lastname)
     {
          $this->lastname = $lastname;

          return $this;
     }

     public function getEmail(){
          return $this->email;
     }
     public function setEmail($email)
     {
          $this->email = $email;

          return $this;
     }

     public function getPassword(){
          return $this->password;
     }
     public function setPassword($password)
     {
          $this->password = $password;

          return $this;
     }

     public function getGenero(){
          return $this->genero;
     }
     public function setGenero($genero)
     {
          $this->genero = $genero;

          return $this;
     }

     public function getDireccion(){
          return $this->direccion;
     }
     public function setDireccion($direccion)
     {
          $this->direccion = $direccion;

          return $this;
     }

     public function getPais(){
          return $this->pais;
     }
     public function setPais($pais)
     {
          $this->pais = $pais;

          return $this;
     }

     public function getCiudad(){
          return $this->ciudad;
     }
     public function setCiudad($ciudad)
     {
          $this->ciudad = $ciudad;

          return $this;
     }
     
     public function getCodigopostal(){
          return $this->codigopostal;
     }
     public function setCodigopostal($codigopostal)
     {
          $this->codigopostal = $codigopostal;

          return $this;
     }

     public function getTelefono(){
          return $this->telefono;
     }
     public function setTelefono($telefono)
     {
          $this->telefono = $telefono;

          return $this;
     }

     public function crearUsuario($db){
          $usuarios = $this->getData();
          $result = $db->getReference('users')
             ->push($usuarios);
             
          if ($result->getKey() != null)
              return '{"mensaje":"Registro almacenado","key":"'.$result->getKey().'"}';
          else 
              return '{"mensaje":"Error al guardar el registro"}';
      }

     public function __ToString(){
        $result['fistname'] = $this->fistname;
        $result['lastname'] = $this->lastname;
        $result['email'] = $this->email;
        $result['password'] = $this->password;
        $result['genero'] = $this->genero;
        $result['direccion'] = $this->direccion;
        $result['pais'] = $this->pais;
        $result['ciudad'] = $this->ciudad;
        $result['codigopostal'] = $this->codigopostal;
        $result['elefono'] = $this->telefono;
        return json_encode($result);
     }
 }





?>