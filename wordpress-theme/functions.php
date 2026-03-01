<?php
/**
 * OptiFlow Digital Theme Functions
 */

// Enqueue styles and scripts
function optiflow_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');
    $style_path = get_template_directory() . '/style.css';
    $style_version = file_exists($style_path) ? filemtime($style_path) : $theme_version;

    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;500;600&display=swap', array(), null);
    wp_enqueue_style('optiflow-style', get_template_directory_uri() . '/style.css', array(), $style_version);
    wp_enqueue_script('optiflow-script', get_template_directory_uri() . '/js/main.js', array(), $theme_version, true);
}
add_action('wp_enqueue_scripts', 'optiflow_enqueue_assets', 20);

// Theme support
function optiflow_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'optiflow'),
    ));
}
add_action('after_setup_theme', 'optiflow_setup');

// Custom theme settings
function optiflow_customize_register($wp_customize) {
    // WhatsApp Number
    $wp_customize->add_section('optiflow_whatsapp', array(
        'title' => __('WhatsApp', 'optiflow'),
        'priority' => 30,
    ));
    $wp_customize->add_setting('whatsapp_number', array(
        'default' => '553899484217',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('whatsapp_number', array(
        'label' => __('Número do WhatsApp (com código do país)', 'optiflow'),
        'section' => 'optiflow_whatsapp',
        'type' => 'text',
    ));
}
add_action('customize_register', 'optiflow_customize_register');

// Helper function
function optiflow_whatsapp_link() {
    $number = get_theme_mod('whatsapp_number', '553899484217');
    return 'https://wa.me/' . $number;
}
