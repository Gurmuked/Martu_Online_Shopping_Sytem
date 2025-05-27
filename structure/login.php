<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Martu Online Shopping</title>
  <link rel="stylesheet" href="../style/login.css">
</head>
<body>
  <?php include '../structure/header.html'; ?>

  <div class="login-container">

    <h2>Welcome Back!</h2>
    <p>Please log in to your account</p>

    <form method="post" action="../php/log.php">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      
      <button type="submit" name="submit">Login</button>
    </form>

    <div id="error-message" class="error">
      <?php if (isset($error_message)) echo $error_message; ?>
    </div>

    <p class="signup-link">Don't have an account? <a href="../structure/SignUp.php">Sign Up</a></p>
  </div>

  <?php include '../structure/footer.html'; ?>
</body>
</html>