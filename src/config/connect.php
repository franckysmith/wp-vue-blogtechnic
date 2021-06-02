<?php 


require 'db-config.php';
$options =
[
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
];

    $pdo = new PDO($DB_DSN, $DB_USER, $DB_PASS, $options);

    // $query = $pdo->query('SELECT * FROM enceintes ORDER BY id DESC' );
    $query = $pdo->query('SELECT * FROM enceintes ORDER BY id DESC')->fetchAll();
   
  // $liste = $query->fetchall(PDO::FETCH_ASSOC); 
  // $idd=($liste[0]);
  echo json_encode($query);
  

?>