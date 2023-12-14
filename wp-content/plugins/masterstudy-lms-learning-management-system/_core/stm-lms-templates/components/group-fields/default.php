<?php
/**
 * @var string $type
 * @var string $field_name
 * @var int    $id
 * @var string $slug
 * @var string $label
 * @var string $description
 * @var string $placeholder
 * @var bool   $required
 */
?>
<?php if ( $label ) : ?>
	<label for="<?php echo esc_attr( $id ); ?>">
		<?php
		echo esc_html( $label );
		if ( $required ) :
			?>
			<span>*</span>
		<?php endif; ?>
	</label>
<?php endif; ?>
<input type="<?php echo esc_attr( $type ); ?>" name="<?php echo esc_attr( $id ); ?>" placeholder="<?php echo esc_html( $placeholder ); ?>" id="<?php echo esc_attr( $id ); ?>" data-label="<?php echo esc_html( $label ); ?>" <?php echo ( $required ) ? 'required' : ''; ?> class="masterstudy-group-fields-form__additional-fields">
<?php if ( $description ) : ?>
	<div class="masterstudy-group-fields-form__item-description"><?php echo esc_html( $description ); ?></div>
<?php endif; ?>
