<?php  
/**
 * My Awesome WordPress Theme functions and definitions
 *
 *
 * @package WordPress
 * @subpackage gulptheme
 * @since 1.0.0
 * @version 1.0.0
 */



//https://codex.wordpress.org/Content_Width
if(!isset($content_width)){
  $content_width=800;}

if ( !function_exists('gulptheme_scripts') ):
  function gulptheme_scripts () {
    global $google_fonts;
    global $font_awesome; 
    wp_enqueue_style( 'google-fonts', $google_fonts, array(), '1.0.0', 'all' );
    // wp_enqueue_style( 'font-awesome', $font_awesome, array(), '5.0.13', 'all' );
    wp_enqueue_style( 'gulptheme-style', get_stylesheet_uri() );
    wp_enqueue_style( 'style', get_stylesheet_uri(), array('google-fonts','font-awesome'), '1.0.0', 'all' );
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'script', $font_awesome, array('jquery'), '1.0.0', true );
    wp_enqueue_script( 'script', get_template_directory_uri() . '/script.js', array('jquery'), '1.0.0', true );
  }
endif;
add_action('wp_enqueue_scripts', 'gulptheme_scripts');


function gulptheme_menus(){
  register_nav_menus(array(
    'main_menu' =>__('Menu Pricipal', 'gulptheme'),
    'social_menu'=>__('Menu Redes Sociales', 'gulptheme'),
  ));
}
add_action('init','gulptheme_menus');


add_theme_support('custom-logo',array(
  'height' => 100,
  'width' => 100,
  'flex-height' => true,
  'flex-width' => true
));

