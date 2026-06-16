<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="OptiFlow Digital - Automação inteligente de WhatsApp para vendas e atendimento. Agende sua consultoria gratuita.">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<nav class="navbar">
    <div class="container">
        <a href="#hero" class="navbar-brand">
            <img src="<?php echo get_template_directory_uri(); ?>/images/optiflow-logo.png" alt="OptiFlow Digital" style="width:32px; height:32px; border-radius:6px; object-fit:contain;">
            <span>Opti<span class="highlight">Flow</span></span>
        </a>
        <ul class="nav-links">
            <li><a href="#hero">Início</a></li>
            <li><a href="#about">Quem Somos</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#benefits">Benefícios</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="<?php echo optiflow_whatsapp_link(); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.875rem;">💬 Fale Conosco</a></li>
        </ul>
        <button class="mobile-toggle" onclick="document.getElementById('mobileMenu').classList.toggle('active')" aria-label="Menu">☰</button>
    </div>
    <div id="mobileMenu" class="mobile-menu container">
        <a href="#hero">Início</a>
        <a href="#about">Quem Somos</a>
        <a href="#services">Serviços</a>
        <a href="#benefits">Benefícios</a>
        <a href="#contact">Contato</a>
        <a href="<?php echo optiflow_whatsapp_link(); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size:0.875rem;">💬 Fale Conosco</a>
    </div>
</nav>
