<?php
    class Empresa{
        private $name;
        private $email;
        private $password;
        private $descripcion;
        private $mision;
        private $vision;
        private $telefono;
        private $redsolcial;
        private $direcciones;
        private $banners;
        private $logo;
        private $pais;
        private $ciudad;
        private $locaclizacion;

        public function __construct(
            $name,
            $email,
            $password,
            $descripcion,
            $mision,
            $vision,
            $telefono,
            $redsolcial,
            $direcciones,
            $banners,
            $logo,
            $pais,
            $ciudad,
            $locaclizacion
         ){
            $this->name = $name;
            $this->email= $email;
            $this->password= $password;
            $this->descripcion= $descripcion;
            $this->mision= $mision;
            $this->vision= $vision;
            $this->telefono= $telefono;
            $this->redsolcial= $redsolcial;
            $this->direcciones= $direcciones;
            $this->banners= $banners;
            $this->logo= $logo;
            $this->pais= $pais;
            $this->ciudad= $ciudad;
            $this->locaclizacion= $locaclizacion;
        }

        public function getName()
        {
                return $this->name;
        }

        public function setName($name)
        {
                $this->name = $name;

                return $this;
        }
        public function getEmail()
        {
                return $this->email;
        }

        public function setEmail($email)
        {
                $this->email = $email;

                return $this;
        }
        public function getPassword()
        {
                return $this->password;
        }

        public function setPassword($password)
        {
                $this->password = $password;

                return $this;
        }
        public function getDescripcion()
        {
                return $this->descripcion;
        }

        public function setDescripcion($descripcion)
        {
                $this->descripcion = $descripcion;

                return $this;
        }
        public function getMision()
        {
                return $this->mision;
        }

        public function setMision($mision)
        {
                $this->mision = $mision;

                return $this;
        }
        public function getVision()
        {
                return $this->vision;
        }

        public function setVision($vision)
        {
                $this->vision = $vision;

                return $this;
        }
        public function getTelefono()
        {
                return $this->telefono;
        }

        public function setTelefono($telefono)
        {
                $this->telefono = $telefono;

                return $this;
        }
        public function getRedsolcial()
        {
                return $this->redsolcial;
        }

        public function setRedsolcial($redsolcial)
        {
                $this->redsolcial = $redsolcial;

                return $this;
        }
        public function getDirecciones()
        {
                return $this->direcciones;
        }

        public function setDirecciones($direcciones)
        {
                $this->direcciones = $direcciones;

                return $this;
        }
        public function getBanners()
        {
                return $this->banners;
        }

        public function setBanners($banners)
        {
                $this->banners = $banners;

                return $this;
        }
        public function getLogo()
        {
                return $this->logo;
        }

        public function setLogo($logo)
        {
                $this->logo = $logo;

                return $this;
        }
        public function getPais()
        {
                return $this->pais;
        }

        public function setPais($pais)
        {
                $this->pais = $pais;

                return $this;
        }
        public function getCiudad()
        {
                return $this->ciudad;
        }

        public function setCiudad($ciudad)
        {
                $this->ciudad = $ciudad;

                return $this;
        }
        public function getLocaclizacion()
        {
                return $this->locaclizacion;
        }

        public function setLocaclizacion($locaclizacion)
        {
                $this->locaclizacion = $locaclizacion;

                return $this;
        }
        public function crearEmpresa($db){
            $usuarios = $this->getData();
            $result = $db->getReference('Empresa')
               ->push($usuarios);
               
            if ($result->getKey() != null)
                return '{"mensaje":"Registro almacenado","key":"'.$result->getKey().'"}';
            else 
                return '{"mensaje":"Error al guardar el registro"}';
        }
        public function getData(){
                $resulr['name'] = $this->name;
            $resulr['email'] = $this->email;
            $resulr['password'] = $this->password;
            $resulr['descripcion'] = $this->descripcion;
            $resulr['mision'] = $this->mision;
            $resulr['vision'] = $this->vision;
            $resulr['telefono'] = $this->telefono;
            $resulr['redsolcial'] = $this->redsolcial;
            $resulr['direcciones'] = $this->direcciones;
            $resulr['banners'] = $this->banners;
            $resulr['logo'] = $this->logo;
            $resulr['pais'] = $this->pais;
            $resulr['ciudad'] = $this->ciudad;
            $resulr['locaclizacion'] = $this->locaclizacion;
                return $resulr;
            }
        public function __ToString(){
            $resulr['name'] = $this->name;
            $resulr['email'] = $this->email;
            $resulr['password'] = $this->password;
            $resulr['descripcion'] = $this->descripcion;
            $resulr['mision'] = $this->mision;
            $resulr['vision'] = $this->vision;
            $resulr['telefono'] = $this->telefono;
            $resulr['redsolcial'] = $this->redsolcial;
            $resulr['direcciones'] = $this->direcciones;
            $resulr['banners'] = $this->banners;
            $resulr['logo'] = $this->logo;
            $resulr['pais'] = $this->pais;
            $resulr['ciudad'] = $this->ciudad;
            $resulr['locaclizacion'] = $this->locaclizacion;
            return json_encode($resulr);
         }
    }


?>