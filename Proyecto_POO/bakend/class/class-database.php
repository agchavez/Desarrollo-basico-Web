<?php
    require_once('../../vendor/autoload.php');
    use Kreait\Firebase\Factory;

    class Database{
        private $keyFile = '../../secrec/promerca-93966-1eed8fbb8c7c.json';
        private $URI = 'https://promerca-93966.firebaseio.com/nombres';
        private $db;

        public function __construct(){
            $firebase = (new Factory)
                ->withServiceAccount($this->keyFile)
                ->withDatabaseUri($this->URI)
                ->create();

            $this->db = $firebase->getDatabase();
        }

        public function getDB(){
            return $this->db;
        }
    }
?>