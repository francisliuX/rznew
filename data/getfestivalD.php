<?php
header("Content-Type:application/json");
require_once("init.php");
//$sql='select * from rz_festival_producta order by seq_recommended desc';
$sql='SELECT * FROM `rz_festival_producta` ORDER BY `rz_festival_producta`.`seq_recommended` desc';
echo json_encode(mysqli_fetch_all(mysqli_query($conn,$sql),1));
