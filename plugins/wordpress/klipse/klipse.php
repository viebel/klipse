<?php
/*
	Plugin Name: Klipse
	Plugin URI: https://github.com/viebel/klipse
	GitHub URI: https://github.com/viebel/klipse
	Description: Embed Interactive Code Snippets in your articles
	Version: 0.0.1
	Author: Yehonathan Sharvit
	Author URI: http://blog.klipse.tech
    License: GPL3
*/

add_action( 'wp_enqueue_scripts', 'add_klipse_scripts' );

function add_klipse_scripts() {
    $settings_url = 'http://storage.googleapis.com/app.klipse.tech/klipse_settings_wordpress_code.js';
    $script_url = 'https://storage.googleapis.com/app.klipse.tech/plugin_prod/js/klipse_plugin.min.js';
    $style_url = 'https://storage.googleapis.com/app.klipse.tech/css/codemirror.css';

    wp_enqueue_style('klipse-codemirror', $style_url);
    wp_enqueue_script(
        'klipse-settings',
        $settings_url,
        false,
        null,
        true
    );

   	wp_enqueue_script(
		'klipse',
		$script_url,
		false,
		null,
		true
	);

}

?>