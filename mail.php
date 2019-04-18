<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$price = $_POST['price'];
$year = $_POST['year'];
$district = $_POST['district'];
$message = $_POST['message'];
$phone = $_POST['phone'];

$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru';
$mail->SMTPAuth = true;
$mail->Username = 'slovo1333@yandex.ru';
$mail->Password = 'slovo1335';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('slovo1333@yandex.ru');
$mail->addAddress('vb@zolle.ru');
$mail->isHTML(true);

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = 'Инвестиции в размере ' .$price . ' рублей.<br>В ' .$year. ' должны уже приносить прибыль.<br>Район в котором хотите помещение: ' .$district. '<br>Номер телефона для связи: ' .$phone. '<br>Сообщение пользователя: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'Спасибо за заявку. Ожидайте нашего звонка в течении 15 минут';
}
?>