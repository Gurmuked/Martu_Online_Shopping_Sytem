<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Martu Online Shopping</title>
  <link rel="stylesheet" href="../style/signUp.css">
</head>
<body>
  <?php include '../structure/header.html'; ?>

  <section class="account-page">
    <div class="acc-form-container">
      <h2>Create an account</h2>
      <p>Enter your details below</p>
      <form id="accountForm" action="../php/reg.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required class="text-form">

        <label for="email">Email or Phone Number:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required>

        <button type="submit" name="submit">Create Account</button>
      </form>

      <p class="login-link">Already have an account? <a href="../structure/login.php">Log in</a></p>
    </div>
  </section>

  <?php include '../structure/footer.html'; ?>
</body>
</html>