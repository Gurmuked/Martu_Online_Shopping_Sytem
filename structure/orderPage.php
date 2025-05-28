<?php
include('header.html')
?> 

<!DOCTYPE html>
<html>
  <head>
    <title> Martu Online Shopping</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../style/general.css">
    <link rel="stylesheet" href="../style/check.css">
  </head>
  <body>

    <div class="main">
      <div class="page-title">Review your order</div>

      <div class="checkout-grid">
        <div class="order-summary js-order-summary">
        </div>
        <div>
              <div class="payment-summary js-payment-summary"> 
              
              </div>
              <div class="overlay" id="form-overlay">
              <div class="form-container">
                  <form action="../php/pl_order.php" method="post" id="order-form">
                      <input type="email" id="email" name="email" placeholder="username" required>
                      <input type="password" id="password" name="password" placeholder="Your Password" required>
                      <button type="submit" name="submit" class="place-order-button button-primary" id="pl" >
                               Place your order
                      </button> 
                  </form>
                  
                </div>
              </div>
        </div>
        
      </div>
    </div>
    <script type="module" src="../function/Descriptioin.js"></script>
    <script type="module" src="../function/orderPage.js"></script>
  </body>
</html>

 <?php
include('footer.html')
?> 