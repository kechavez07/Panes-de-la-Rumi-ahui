<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <div class="login-container">
    <div class="login-gradient-overlay"></div>
    <div class="login-box">
      <div class="logo-container">
        <div class="logo">N</div>
      </div>

      <form class="login-form" id="login-form" >
        <div class="input-group">
          <input type="text" placeholder="User" id="user" class="input-field" required />
        </div>
        <div class="input-group">
          <input type="password" placeholder="Password" id="password" class="input-field" required />
        </div>
        <button type="submit" class="submit-button"id="submit-button">
          Sign in
        </button>
      </form>
    </div>
  </div>
  <script src="js/login.js"></script>
</body>
</html>