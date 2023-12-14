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
 * @var array  $choices
 */
?>
<?php if ( $label ) : ?>
	<label>
		<?php
		echo esc_html( $label );
		if ( $required ) :
			?>
			<span>*</span>
		<?php endif; ?>
	</label>
<?php endif; ?>
<select <?php echo ( $required ) ? 'required' : ''; ?> data-label="<?php echo esc_html( $label ); ?>" class="masterstudy-group-fields-form__additional-fields">
	<?php foreach ( $choices as $choice ) : ?>
		<option value="<?php echo esc_attr( $choice ); ?>"><?php echo esc_html( $choice ); ?></option>
	<?php endforeach; ?>
</select>
<?php if ( $description ) : ?>
	<div class="masterstudy-group-fields-form__item-description"><?php echo esc_html( $description ); ?></div>
<?php endif; ?>
