<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Description Page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../style/description.css">
</head>
<body>
    
<?php
include '../structure/header.html';
?>
    <div class="container">
        <div class="image-gallery">
            <img id="main-image" src="../photos/spray .png" alt="Main Product Image">
            <div class="product-description">
                <span>1 year warranty </span> <br> 
                <span>Feel free to return!</span>
            </div>
        </div>
        <div class="product-details">
            <h1>Gucci Spray Perfume</h1>
            <div class="rating">
                &#9733; &#9733; &#9733; &#9733; &#9734; (150 Reviews)
            </div>
            <div class="price">800 birr.</div>
            <p>Experience luxury with Gucci’s signature spray perfume. Crafted with an exquisite blend of rich florals, warm spices, and sophisticated musk, it offers a long-lasting, captivating scent. Perfect for any occasion, it defines elegance and confidence in every spray.</p>

            <div class="quantity">
                <button id="decrease">-</button>
                <input type="text" id="quantity" value="1">
                <button id="increase">+</button>
            </div>
            <div class="buttons">
                <button class="buy-now">Buy Now</button>
            </div>
        </div>
    </div>

    <div class="overlay" id="form-overlay">
        <div class="form-container">
            <h2>Order Details</h2>
            <form id="order-form" action="../php/pl_order.php"  method="post">
                <input type="email" name="email" id="email" placeholder="Your Email" required>
                <input type="password" name="password" id="password" placeholder="Your Password" required>
                <button type="submit" name="submit">Start Processing</button>
            </form>
            
        </div>
    </div>
    <!-- Javascript -->
     <script  src="../function/Descriptioin.js"></script>
</body>
</html>
