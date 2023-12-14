<?php
/**
 * @var $data
 */
if ( ! empty( $data['label'] ) ) { ?>
	<span class="masterstudy-authorization__custom-label">
		<?php echo esc_html( $data['label'] ); ?>
	</span>
<?php } ?>

<input type="text" name="<?php echo esc_attr( $data['field_name'] ); ?>" class="masterstudy-authorization__form-input" placeholder="<?php echo esc_html( $data['placeholder'] ); ?>" value="<?php echo esc_attr( $data['value'] ?? '' ); ?>">

<?php if ( ! empty( $data['description'] ) ) { ?>
	<span class="masterstudy-authorization__custom-description">
		<?php echo esc_html( $data['description'] ); ?>
	</span>
	<?php
}
