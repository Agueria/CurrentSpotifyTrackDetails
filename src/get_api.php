<?php
 $curl = curl_init();
 $headers = array();
 $headers[] = 'Accept: application/json';
 $headers[] = 'Content-type: application/json';
 $headers[] = 'Authorization: Bearer <token>';
 curl_setopt($curl, CURLOPT_URL,"https://api.spotify.com/v1/me/player/currently-playing");
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
 $result = curl_exec($curl);
 curl_close($curl);
 echo $result;
?>
