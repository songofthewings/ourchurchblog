<?php
/**
 * Customizer Dynamic Styles: Section Quantity Style.
 *
 * Prefix: pp -> product page, s -> styles.
 *
 * @package Jupiter
 * @subpackage MK_Customizer
 * @since 5.9.4
 */

$css = '';
$quantity = '.woocommerce-page.single-product div.product form.cart div.quantity';
$quantity_button_width = 29;
$quantity_border_width = 1;

$css .= $quantity . '{';
$css .= mk_cs_box_model( 'cs_pp_s_quantity_style_box_model' );
$css .= '}';
$css .= $quantity . ' .mk-quantity-label,';
$css .= $quantity . ' input.qty {';
$css .= mk_cs_typography( 'cs_pp_s_quantity_style_typography' );
$css .= '}';
$css .= $quantity . ' input.qty,';
$css .= $quantity . ' .quantity-button {';

$border_width = get_theme_mod( 'cs_pp_s_quantity_style_border' );
if ( $border_width ) {
	$css .= "border-width: {$border_width}px;";
	$quantity_button_width = (int) $quantity_button_width + $border_width * 2;
	$quantity_border_width = $border_width;
}

$border_color = get_theme_mod( 'cs_pp_s_quantity_style_border_color' );
if ( $border_color ) {
	$css .= "border-color: {$border_color};";
}

$css .= '}';
$css .= $quantity . ' input.qty {';

$background_color = get_theme_mod( 'cs_pp_s_quantity_style_bg_color' );
if ( $background_color ) {
	$css .= "background-color: {$background_color};";
}

$quantity_input_width = 1;
$typography = mk_maybe_json_decode( get_theme_mod( 'cs_pp_s_quantity_style_typography' ) );
if ( $typography ) {
	$quantity_input_width = (int) $typography->size;
}

if ( $border_width ) {
	$quantity_input_width += (int) $border_width * 2;
}

$css .= 'width: ' . $quantity_input_width . 'px;';
$css .= '}';

// Add with to quantity nav buttons.
$css .= $quantity . ' .quantity-button {';
$css .= 'width: ' . $quantity_button_width . 'px;';
$css .= '}';

// Add height and position to quantity up button.
$css .= $quantity . ' .quantity-button.quantity-up {';
$css .= 'top: ' . $quantity_border_width . 'px;';
$css .= 'height: calc( 50% - ' . $quantity_border_width . 'px );';
$css .= '}';

// Add height and position to quantity down button.
$css .= $quantity . ' .quantity-button.quantity-down {';
$css .= 'bottom: ' . $quantity_border_width . 'px;';
$css .= 'height: calc( 50% - ' . $quantity_border_width . 'px );';
$css .= '}';

return $css;
