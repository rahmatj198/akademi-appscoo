<?php

/**
 * @var int $id
 * @var string $title
 * @var string $link
 * @var string $icon
 * @var string $style
 * @var string $size
 * @var bool $login
 *
 * masterstudy-button_icon-prev|next - for icon direction
 * masterstudy-button_style-primary|secondary|tertiary|outline|danger - for style change
 * masterstudy-button_size-sm|md - for size change
 * masterstudy-button_loading - for loading animation
 * masterstudy-button_disabled - for "disabled" style
 */

wp_enqueue_style( 'masterstudy-button' );

$data       = isset( $id ) ? ' data-id=' . $id : '';
$icon_class = isset( $icon ) ? ' masterstudy-button_icon-' . $icon : '';
$login      = isset( $login ) ? 'register' === $login ? 'data-authorization-modal=register' : 'data-authorization-modal=login' : '';
?>

<a
	href="<?php echo esc_url( $link ); ?>"
	class="masterstudy-button <?php echo esc_attr( 'masterstudy-button_style-' . $style . ' masterstudy-button_size-' . $size . $icon_class ); ?>"
	<?php echo esc_attr( $login . $data ); ?>
>
	<span class="masterstudy-button__title"><?php echo esc_html( $title ); ?></span>
</a>
