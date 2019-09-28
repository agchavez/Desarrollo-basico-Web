<?php

class Usuario{
    private $fistname;
    private $lastname;
    private $email;
    private $password;
    private $gender;
    private $birthdate;

    public function __construct($fistname,$lastname,$email,$password,$gender,$birthdate){
        $this->$fistname=$fistname;
        $this->$lastname = $lastname;
        $this->$email = $email;
        $this->$password = $password;
        $this->$gender = $gender;
        $this->$birthdate = $birthdate;

    }

        public function getGender()
        {
                return $this->gender;
        }

         
        public function setGender($gender)
        {
                $this->gender = $gender;
                
        }

        
        public function getFistname()
        {
                return $this->fistname;
                
        }

          
        public function setFistname($fistname)
        {
                $this->fistname = $fistname;
                echo 'guardado' . $this->$fistname;
        }

        
        public function getEmail()
        {
                return $this->email;
        }

          
        public function setEmail($email)
        {
                $this->email = $email;
        }
 
        public function getPassword()
        {
                return $this->password;
        }

         
        public function setPassword($password)
        {
                $this->password = $password;
        }

        
        public function getBirthdate()
        {
                return $this->birthdate;
        }
          
        public function setBirthdate($birthdate)
        {
                $this->birthdate = $birthdate;
        }

         
        public function getLastname()
        {
                return $this->lastname;
        }

        
         
        public function setLastname($lastname)
        {
                $this->lastname = $lastname;
        }

        public function __toString(){
            $result['fistname'] = $this->$fistname;
            $result['lastname'] = $this->$lastname;
            $result['email'] = $this->$email;
            $result['password'] = $this->$password;
            $result['gender'] = $this->$gender;
            $result['birthdate'] = $this->$birthdate;
            return json_encode($result);

        }
}
?>