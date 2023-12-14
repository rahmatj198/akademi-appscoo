<?php
/**
 * @var $data
 */
?>

<div class="masterstudy-authorization__radio-group">
	<?php if ( ! empty( $data['label'] ) ) { ?>
		<span class="masterstudy-authorization__custom-label">
			<?php echo esc_html( $data['label'] ); ?>
		</span>
		<?php
	}
	foreach ( $data['choices'] as $index => $choice ) {
		?>
		<div class="masterstudy-authorization__radio-container">
			<div class="masterstudy-authorization__radio">
				<input type="radio" name="<?php echo esc_attr( $data['field_name'] ); ?>" value="<?php echo esc_attr( $choice ); ?>"/>
				<span class="masterstudy-authorization__radio-wrapper <?php echo esc_attr( 0 === $index ? 'masterstudy-authorization__radio-wrapper_checked' : '' ); ?>"></span>
			</div>
			<span class="masterstudy-authorization__radio-title">
				<?php echo esc_html( $choice ); ?>
			</span>
		</div>
		<?php
	}
	if ( ! empty( $data['description'] ) ) {
		?>
		<span class="masterstudy-authorization__custom-description">
			<?php echo esc_html( $data['description'] ); ?>
		</span>
	<?php } ?>
</div>
