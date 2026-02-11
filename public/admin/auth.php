<?php
/**
 * Inba University CMS - OAuth Gateway (Auth)
 * Part of the "Jembatan Security" for Decap CMS on Hostinger
 */

session_start();

// Configuration
$client_id = "Ov23liu2Vn9u3h9MFiRe"; 
$redirect_uri = "https://inbauniversity.com/admin/callback.php";
$scope = "repo,user";
$state = bin2hex(random_bytes(16));
$_SESSION['oauth_state'] = $state;

$url = "https://github.com/login/oauth/authorize?" . http_build_query([
    'client_id' => $client_id,
    'redirect_uri' => $redirect_uri,
    'scope' => $scope,
    'state' => $state,
    'allow_signup' => 'false'
]);

header("Location: " . $url);
exit;
