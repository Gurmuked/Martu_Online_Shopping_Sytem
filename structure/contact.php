

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Martu Online Shopping</title>
    <link rel="stylesheet" href="../style/contact.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body>
<?php
include '../structure/header.html';
?> 
    <section class="hero">
        <div class="container">
            <h2> Get in Touch</h2>
            <p><a href="../structure/index.php">Home</a> / Contact</p>
        </div>
    </section>

    <section class="contact-content">
        <div class="container">
           <div class="contact-form">
                <form action="../php/cont.php" method="POST"   id="contactForm">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                    <input type="tel" id="phone" name="mobile" placeholder="Your Phone" required>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    <button type="submit" name="submit">Send Message</button>
                </form>
            </div>
            <div class="contact-info">
                <div class="call-to-us">
                    <h3>Call To Us</h3>
                    <p>We are available 24/7, 7 days a week.</p>
                    <p>Phone: +251964762288</p>
                    <p>Phone: +251965698844</p>
                    <p>Phone: +251963764285</p>
                    <p>Phone: +2519 87743484</p>
                </div>
                <div class="write-to-us">
                    <h3>Write To Us</h3>
                    <p>Fill out our form and we will contact you within 24 hours.</p>
                    <p>Emails:</p>
                    <p><a href="mailto:customer@exclusive.com">kenenisamiesob@gmail.com</a></p>
                    <p><a href="mailto:support@exclusive.com">support@exclusive.com</a></p>
                </div>
            </div>
        </div>
    </section>


<?php 
include '../structure/footer.html';
?>
</body>
</html>
