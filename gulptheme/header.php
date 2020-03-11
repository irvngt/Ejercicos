<!DOCTYPE html>
<html <?php  language_attributes(); ?>>
<head>
	<meta <?php  bloginfo('charset'); ?>>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="<?php //cinetheme_custom_meta_description(); ?>">
	<?php  wp_head(); ?>
</head>
<body <?php  body_class(); ?>> 
	<!-- <header class="Header">
    <section class="Header-container">
      <?php 
    //   get_template_part('template-parts/header-logo'); 
    //   get_template_part('template-parts/header-menu');
      ?>
	  </section>
	</header> -->

	<nav class="nav">
		<a href="#inicio" class="marca"><a href="#inicio" class="marca"> <a href="<?php echo esc_url(home_url('/')) ?>"></a>
			<?php 
				if(has_custom_logo()):
					the_custom_logo();
				else:
					echo '<a href="'. esc_url(home_url('/')).'">'.get_bloginfo('name').'</a>';
				endif;
			?>
		</a></a>
		<ul id="menu" class="menu">
			<li data-menuanchor="inicio" class="active">
				<a href="#inicio">Inicio</a>
			</li>
			<li data-menuanchor="notas">
				<a href="#notas">Notas</a>
			</li>
			<li data-menuanchor="contacto">
				<a href="#contacto">Contacto</a>
			</li>
		</ul>
	</nav>

	<main id="fullpage">
		<header class="section header">
			<div class="contenedor-titulo">
				<h1 class="titulo">
					<span class="texto-naranja">Novi</span> 
					<span class="texto-blanco">b-rex</span>
				</h1>
				<p class="texto-blanco">Nuevo Modelo para Vans</p>
			</div>
			<div class="contenedor-icono">
				<p><a href="#notas" class="texto-blanco"><i class="fas fa-chevron-down"></i></a></p>
			</div>
			<!-- Video animal -->
			<!-- <video loop muted data-autoplay class="bg-video">
				<source src="media/bg-video.m4v" type="video/mp4">
			</video> -->
		</header>
