<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <!-- محدود کردن زوم با دو انگشت در گوشی -->
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
    <title>هنرستان علامه دوانی - ورود</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="login.css">
    <link rel="icon" href="images/favicon.png">
</head>

<body>
    <div class="body">
        <div class="container">
            <div class="right">
                <div class="box-login">
                    <div class="bl-top">
                        <h1 id="h1">خوش آمدید!</h1>
                        <p id="p"> لطفا مشخصات خود را وارد کنید</p>
                    </div>
                    <div class="bl-center">
                        <input type="text" name="user_name" id="user_name" placeholder="نام کاربری">
                        <input type="password" name="user_pass" id="user_pass" placeholder="گذرواژه">
                        <input type="text" placeholder="کد کپچا">
                        <img id="captcha-img" src="images/captcha.png" alt="">
                        <a id="repass" href="">بازیابی گذرواژه</a>
                    </div>
                    <div class="bl-bottom">

                        <button id="login-btn">ورود</button>
                    </div>
                </div>
            </div>
            <div class="left"></div>
        </div>
        <script src="scripts/login.js"></script>
    </div>
</body>

</html>