<?php
$menuItems = include 'menuItems.php';
?>

<header>
    <div class="logo">
        <a href="index.php"><img src="img/logo.jpg" alt="Logo"></a>
    </div>
    <nav class="menu">
        <ul>
            <?php
            foreach ($menuItems as $name => $link) {
                echo "<li><a href='$link'>$name</a></li>";
            }
            ?>
        </ul>
    </nav>
</header>
