<html dir="rtl">

<head>
    <meta charset="UTF-8">
    <!-- محدود کردن زوم با دو انگشت در گوشی -->
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
    <title>هنرستان علامه دوانی - صفحه اصلی</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="all.css">
    <link rel="stylesheet" href="home.css">
    <link rel="icon" href="images/favicon.png">
</head>

<body>

    <!-- header & scroll bar & navbar start -->

    <?php
    include("header.php")
        ?>

    <!-- header & scroll bar & navbar start  -->

    <!-- content start -->

    <div class="class">
        <div class="title-2">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <h1>دسته بندی دوره ها</h1>
        </div>
        <div class="class-boxes">
            <div class="boxes-right">
                <a href="" id="cb-1" class="class-box">دهم</a>
                <a href="" id="cb-2" class="class-box">یازدهم</a>
            </div>
            <div class="boxes-left">
                <a href="" id="cb-3" class="class-box">دوازدهم</a>
                <a href="" id="cb-4" class="class-box">فرادرس</a>
            </div>
        </div>
    </div>
    <div class="cart-container">
        <div class="title-4">
            <i class="fa fa-circle" aria-hidden="true"></i>
            <h2>آزمون ها</h1>
        </div>

        <img onclick="c_a_left()" id="c-a-left" src="images/arrow.png" alt="arrow" title="arrow">
        <div class="test-carts">
            <div class="t-carts">
                <a href="" class="t-cart">
                    <div class="t-c-top">
                        <div class="opacity"></div>
                        <h1>HTML</h1>
                    </div>
                    <div class="t-c-center">
                        <h1>آزمون های HTML</h1>
                        <p>یه سری توضیاحات مربوط به آزمون ها</p>
                    </div>
                    <div class="top-line"></div>
                    <div class="t-c-bottom">
                        <div class="tcb-deat">
                            <p>تعداد آزمون ها</p>
                            <span>:</span>
                            <span id="span-bt">121</span>
                        </div>
                    </div>
                </a>
                <a href="" class="t-cart">
                    <div class="t-c-top">
                        <div class="opacity"></div>
                        <h1>CSS</h1>
                    </div>
                    <div class="t-c-center">
                        <h1>آزمون های CSS</h1>
                        <p>یه سری توضیاحات مربوط به آزمون ها</p>
                    </div>
                    <div class="top-line"></div>
                    <div class="t-c-bottom">
                        <div class="tcb-deat">
                            <p>تعداد آزمون ها</p>
                            <span>:</span>
                            <span id="span-bt">121</span>
                        </div>
                    </div>
                </a>
                <a href="" class="t-cart">
                    <div class="t-c-top">
                        <div class="opacity"></div>
                        <h1>JS</h1>
                    </div>
                    <div class="t-c-center">
                        <h1>آزمون های JS</h1>
                        <p>یه سری توضیاحات مربوط به آزمون ها</p>
                    </div>
                    <div class="top-line"></div>
                    <div class="t-c-bottom">
                        <div class="tcb-deat">
                            <p>تعداد آزمون ها</p>
                            <span>:</span>
                            <span id="span-bt">121</span>
                        </div>
                    </div>
                </a>
                <a href="" class="t-cart">
                    <div class="t-c-top">
                        <div class="opacity"></div>
                        <h1>PHP</h1>
                    </div>
                    <div class="t-c-center">
                        <h1>آزمون های PHP</h1>
                        <p>یه سری توضیاحات مربوط به آزمون ها</p>
                    </div>
                    <div class="top-line"></div>
                    <div class="t-c-bottom">
                        <div class="tcb-deat">
                            <p>تعداد آزمون ها</p>
                            <span>:</span>
                            <span id="span-bt">121</span>
                        </div>
                    </div>
                </a>
                <a href="" class="t-cart">
                    <div class="t-c-top">
                        <div class="opacity"></div>
                        <h1>#C</h1>
                    </div>
                    <div class="t-c-center">
                        <h1>آزمون های #C</h1>
                        <p>یه سری توضیاحات مربوط به آزمون ها</p>
                    </div>
                    <div class="top-line"></div>
                    <div class="t-c-bottom">
                        <div class="tcb-deat">
                            <p>تعداد آزمون ها</p>
                            <span>:</span>
                            <span id="span-bt">121</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="arrows-1">
            <img onclick="c_a_right()" id="c-a-right-2" src="images/arrow.png" alt="arrow" title="arrow">
            <img onclick="c_a_left()" id="c-a-left-2" src="images/arrow.png" alt="arrow" title="arrow">
        </div>
        <div class="arrows-2">
            <img onclick="c_a_right_2()" id="c-a-right-2" src="images/arrow.png" alt="arrow" title="arrow">
            <img onclick="c_a_left_2()" id="c-a-left-2" src="images/arrow.png" alt="arrow" title="arrow">
        </div>
        <img onclick="c_a_right()" id="c-a-right" src="images/arrow.png" alt="arrow" title="arrow">
    </div>
    <div class="gallery">
        <div class="gallery-top">
            <div class="title-3">
                <i class="fa fa-circle" aria-hidden="true"></i>
                <h2>گالری هنرستان</h2>
            </div>
        </div>
        <div class="slider" id="slider">
            <div class="slide-box">
                <img id="image-1" class="images" src="images/image-1.jpg">
                <img id="image-2" class="images" src="images/image-2.jpg">
                <img id="image-3" class="images" src="images/image-3.jpg">
                <img id="image-4" class="images" src="images/image-4.jpg">
                <img id="image-5" class="images" src="images/image-5.jpg">
                <p id="p-slide">1/5</p>
                <span id="next" onclick="next()"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
                <span id="back" onclick="back()"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>
                <div class="circles">
                    <div class="circle" id="circle-5" onclick="cir_5()"></div>
                    <div class="circle" id="circle-4" onclick="cir_4()"></div>
                    <div class="circle" id="circle-3" onclick="cir_3()"></div>
                    <div class="circle" id="circle-2" onclick="cir_2()"></div>
                    <div class="circle" id="circle-1" onclick="cir_1()"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- content end -->

    <!-- float btn (back to top) & footer start -->

    <?php
    include("footer.php")
        ?>

    <!-- float btn (back to top) & footer end -->

    <!-- scripts start -->

    <script src="scripts/all.js"></script>
    <script src="scripts/home.js"></script>

    <!-- scripts end -->
</body>

</html>