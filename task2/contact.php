<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Contact</title>
</head>
<body>
    <?php include 'menu/menu.php'; ?>
      <main>
        <section class="hero">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Reach out to us for any inquiries, feedback, or special requests.</p>
        </section>
    
        <section class="contact-info">
            <h2>Our Contact Information</h2>
            <p><strong>Address:</strong> 123 Bakery Lane, Sweet City</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Email:</strong> contact@ourbakery.com</p>
            <p><strong>Hours:</strong> Mon-Sat, 7 AM - 7 PM</p>
        </section>
    
        <section class="contact-form">
            <h2>Send Us a Message</h2>
            <form action="submit-form.php" method="POST">
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="message">Your Message:</label>
                    <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </section>
    
        <section class="map">
            <h2>Find Us</h2>
            <p>Visit us at our location. We’re excited to welcome you!</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153159!3d-37.81627937975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57791d0c0b2a5c0!2sBakery!5e0!3m2!1sen!2sus!4v1614147106248!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </section>
    </main>
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>We are a family-owned bakery dedicated to crafting the finest baked goods with love and care.</p>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>Email: <a href="mailto:contact@ourbakery.com">contact@ourbakery.com</a></p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Bakery Lane, Sweet City</p>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <ul class="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 [Your Bakery Name]. All rights reserved.</p>
        </div>
    </footer>      
</body>
</html>