<?php

// RENDER FUNCTION
function renderTemplate($tmp, $vars = array())
{
    if (file_exists($tmp . '.tpl.php')) {
        ob_start();
        extract($vars);
        require $tmp . '.tpl.php';
        return ob_get_clean();
    }
}

// Render footer
function getFooter($vars = array()): string
{
    if (file_exists('footer.tpl.php')) {
        ob_start();
        extract($vars);
        require 'footer.tpl.php';
        return ob_get_clean();
    }
}