<?php
/**
 * @var $data
 */

wp_enqueue_script( 'masterstudy-select2' );
wp_enqueue_style( 'masterstudy-select2' );

$data['value'] = $data['value'] ?? '';
?>

<div class="masterstudy-authorization__select-container">
	<?php if ( ! empty( $data['label'] ) ) { ?>
		<span class="masterstudy-authorization__custom-label">
			<?php echo esc_html( $data['label'] ); ?>
		</span>
	<?php } ?>
	<div class="masterstudy-authorization__select-wrapper">
		<select name="<?php echo esc_attr( $data['field_name'] ); ?>" class="masterstudy-authorization__select">
			<?php foreach ( $data['choices'] as $choice ) { ?>
				<option value="<?php echo esc_attr( $choice ); ?>" <?php selected( $data['value'], $choice ); ?>><?php echo esc_html( $choice ); ?></option>
			<?php } ?>
		</select>
	</div>
</div>
<?php if ( ! empty( $data['description'] ) ) { ?>
	<span class="masterstudy-authorization__custom-description">
		<?php echo esc_html( $data['description'] ); ?>
	</span>
	<?php
}
