<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Martu Online Shopping</title>
    <link rel="stylesheet" href="../style/my.css">
    <link rel="stylesheet" href="../style/index.css">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
  
</head>
<body>
<?php
include '../structure/header.html';
?>

    <div class="hero">
        <div class="hero-text">
            <h1 class="promotion-heading"> Martu Onlinne Shopping </h1>
        </div>
    </div>
<section class="products-container">
    <div class="section new-product-container">
        <div class="todays">
            <div></div>
            <h4>Today's</h4>
        </div>
        <div class="flashsale">
            <h2>New Products</h2>
        </div>
        <div class="products js-products-new-pro">

        </div>
        <div class="horizontal-line"></div>
    </div>
    <div class="section Electronics-container">
        <div class="flashsale">
            <h2>Electronics</h2>
        </div>
        <div class="products js-products-ele">
        </div>
        <div class="horizontal-line"></div>
    </div>
    <div class="section Accessories-container">
        <div class="flashsale">
            <h2>Accessories</h2>
        </div>
        <div class="products js-products-acce">
        </div>
        <div class="horizontal-line"></div>
    </div>
    <div class="section Beauty-container">
        <div class="flashsale">
            <h2>Beauty</h2>
        </div>
        <div class="products js-product-Beauty">
        </div>
        <div class="horizontal-line"></div>
    </div>
</section>


    <div class="about-delivery">
    </div>
    <div class="back-to-top">
         <a href=""><img src="../photos/arrow (1).png" alt="" id="#head"></a>
    </div>
     <script src="../function/animation.js"></script>
    <script type="module" src="../function/index.js"></script>

</body>
</html>

<?php 
include '../structure/footer.html';
?>