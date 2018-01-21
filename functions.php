<?php

function theme_js() {
  global $wp_scripts;
  //wp_enqueue_script( 'vendor_js', get_template_directory_uri() . '/dist/vendor.js', '', '', true );
  wp_enqueue_script( 'bundle_js', get_template_directory_uri() . '/dist/app.bundle.js', '', '', true );
}
add_action( 'wp_enqueue_scripts', 'theme_js' );
add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' );
