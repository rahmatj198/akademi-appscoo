<?php
/**
 * @var $data
 */

if ( ! empty( $data['label'] ) ) { ?>
	<span class="masterstudy-authorization__custom-label">
		<?php echo esc_html( $data['label'] ); ?>
	</span>
<?php } ?>

<textarea rows="5" name="<?php echo esc_attr( $data['field_name'] ); ?>" class="masterstudy-authorization__form-textarea" placeholder="<?php echo esc_html( $data['placeholder'] ); ?>"><?php echo esc_html( $data['value'] ?? '' ); ?></textarea>

<?php if ( ! empty( $data['description'] ) ) { ?>
	<span class="masterstudy-authorization__custom-description">
		<?php echo esc_html( $data['description'] ); ?>
	</span>
	<?php
}
