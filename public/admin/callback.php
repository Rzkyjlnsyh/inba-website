<?php
/**
 * Inba University CMS - OAuth Gateway (Callback)
 * Part of the "Jembatan Security" for Decap CMS on Hostinger
 */

session_start();

$client_id = "Ov23liu2Vn9u3h9MFiRe";
$client_secret = "661df1c071c2d8fb58f349bd730508539375e5f7";

$code = $_GET['code'] ?? null;
$state = $_GET['state'] ?? null;

// Security check: verify state
if (!$state || $state !== ($_SESSION['oauth_state'] ?? '')) {
    die("Security Error: Invalid State. Please try logging in again.");
}

if (!$code) {
    die("Error: No code received from GitHub.");
}

// Exchange code for Access Token
$ch = curl_init("https://github.com/login/oauth/access_token");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'client_id' => $client_id,
    'client_secret' => $client_secret,
    'code' => $code,
]);

$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
$token = $data['access_token'] ?? null;

if (!$token) {
    die("Error: Failed to fetch access token. " . ($data['error_description'] ?? ''));
}

// Communication back to the CMS (Decap CMS protocol)
?>
<!DOCTYPE html>
<html>
<body>
    <script>
        (function() {
            function receiveMessage(e) {
                if (e.origin !== window.location.origin) return;
                
                const token = "<?php echo $token; ?>";
                const response = {
                    token: token,
                    provider: 'github'
                };
                
                window.opener.postMessage(
                    'authorization:github:success:' + JSON.stringify(response),
                    e.origin
                );
            }
            window.addEventListener("message", receiveMessage, false);
            window.opener.postMessage("authorizing:github", "*");
        })();
    </script>
</body>
</html>
