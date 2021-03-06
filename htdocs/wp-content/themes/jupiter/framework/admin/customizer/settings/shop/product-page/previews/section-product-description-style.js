/**
 * File customize-preview.js.
 *
 * Instantly live-update customizer settings in the preview for improved user experience.
 */

(function( $ ) {

	var description_style_container = '.woocommerce-page.single-product div.product .woocommerce-product-details__short-description';
	var description_style_container_paragraph = '.woocommerce-page.single-product div.product .woocommerce-product-details__short-description p';

	wp.customize( 'cs_pp_s_description_style_background_color', function( value ) {
		$( description_style_container ).css( 'background-color', value() );
		
		value.bind( function( to ) {
			$( description_style_container ).css( 'background-color', to );
		} );
	});

	wp.customize( 'cs_pp_s_description_style_typography', function( value ) {
		$( description_style_container + ', ' + description_style_container_paragraph ).css(
			mkPreviewTypography( value(), true )
		);

		value.bind( function( to ) {
			$( description_style_container + ', ' + description_style_container_paragraph ).css(
				mkPreviewTypography( to )
			);
		} );
	});

	wp.customize( 'cs_pp_s_description_style_box_model', function( value ) {
		$( description_style_container ).css(
			mkPreviewBoxModel( value(), true )
		);

		value.bind( function( to ) {
			$( description_style_container ).css(
				mkPreviewBoxModel( to )
			);
		} );
	});

} )( jQuery );

