<?php
$ip = $_SERVER['REMOTE_ADDR'];
$useragent = $_SERVER['HTTP_USER_AGENT'];
$date_time = date("m-d-Y h:i:sa");


$logged = $date_time . " <b>" . $ip . "</b><br>" . $useragent . "\n<hr>\n";

$logfile = fopen("whosatmydoor.html", "a+");
fwrite($logfile, $logged);
fclose($logfile);
?>