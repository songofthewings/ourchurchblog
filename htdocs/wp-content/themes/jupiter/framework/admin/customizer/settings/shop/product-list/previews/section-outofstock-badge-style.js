(function( $ ) {

	var outofstockBadge = '.woocommerce-page li.product .mk-out-of-stock';

	// Text.
	wp.customize( 'cs_pl_s_outofstock_badge_style_text', function( value ) {
		value.bind( function( to ) {
			$(outofstockBadge).text( to );
		} );
	});

	// Typography.
	wp.customize( 'cs_pl_s_outofstock_badge_style_typography', function( value ) {

		$(outofstockBadge).css(
			mkPreviewTypography( value(), true )
		);

		value.bind( function (to) {
			$(outofstockBadge).css(
				mkPreviewTypography( to )
			);
		} );

	});

	// Background color.
	wp.customize( 'cs_pl_s_outofstock_badge_style_background_color', function( value ) {

		$(outofstockBadge).css( 'background-color', value() );

		value.bind( function( to ) {
			$(outofstockBadge).css( 'background-color', to );
		} );

	});

	// Border radius.
	wp.customize( 'cs_pl_s_outofstock_badge_style_border_radius', function( value ) {

		$(outofstockBadge).css( 'border-radius', value() + 'px' );

		value.bind( function( to ) {
			$(outofstockBadge).css( 'border-radius', to + 'px' );
		} );

	});

	// Border width.
	wp.customize( 'cs_pl_s_outofstock_badge_style_border_width', function( value ) {

		$(outofstockBadge).css( 'border-width', value() );

		value.bind( function( to ) {
			$(outofstockBadge).css( 'border-width', to );
		} );

	});

	// Border color.
	wp.customize( 'cs_pl_s_outofstock_badge_style_border_color', function( value ) {

		$(outofstockBadge).css( 'border-color', value() );

		value.bind( function( to ) {
			$(outofstockBadge).css( 'border-color', to );
		} );

	});

	// Box Model.
	wp.customize( 'cs_pl_s_outofstock_badge_style_box_model', function( value ) {

		$(outofstockBadge).css(
			mkPreviewBoxModel( value(), true )
		);

		value.bind( function (to) {
			$(outofstockBadge).css(
				mkPreviewBoxModel( to )
			);
		} );

	});



} )( jQuery );