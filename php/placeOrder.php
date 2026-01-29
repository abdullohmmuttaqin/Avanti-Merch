<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

\Midtrans\Config::$serverKey = $_ENV['MIDTRANS_SERVER_KEY'];
\Midtrans\Config::$isProduction = filter_var($_ENV['MIDTRANS_IS_PRODUCTION'], FILTER_VALIDATE_BOOLEAN);
\Midtrans\Config::$isSanitized = true;
\Midtrans\Config::$is3ds = true;

$params = [
    'transaction_details' => [
        'order_id' => rand(),
        'gross_amount' => $_POST['total'],
    ],
    'item_details' => json_decode($_POST['items'], true),
    'customer_details' => [
        'first_name' => $_POST['name'],
        'email' => $_POST['email'],
        'phone' => $_POST['phone'],
    ],
];

$snapToken = \Midtrans\Snap::getSnapToken($params);
echo $snapToken;
