<?php
/**
 * @var $data
 */
?>

<div class="masterstudy-authorization__checkbox-group">
	<?php if ( ! empty( $data['label'] ) ) { ?>
		<span class="masterstudy-authorization__custom-label masterstudy-authorization__custom-label_group">
			<?php echo esc_html( $data['label'] ); ?>
		</span>
		<?php
	}
	foreach ( $data['choices'] as $choice ) {
		?>
		<div class="masterstudy-authorization__checkbox-container">
			<div class="masterstudy-authorization__checkbox">
				<input type="checkbox" name="<?php echo esc_attr( $data['field_name'] ); ?>" value="<?php echo esc_attr( $choice ); ?>"/>
				<span class="masterstudy-authorization__checkbox-wrapper"></span>
			</div>
			<span class="masterstudy-authorization__checkbox-title">
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
