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
	<?php
endif;
foreach ( $choices as $key => $choice ) :
	?>
	<div class="masterstudy-group-fields-form__item-radio">
		<input type="<?php echo esc_attr( $type ); ?>" name="<?php echo esc_attr( $id ); ?>" id="<?php echo esc_attr( $id . '-' . $key ); ?>" data-label="<?php echo esc_html( $label ); ?>" data-value="<?php echo esc_html( $choice ); ?>" <?php echo ( $required ) ? 'required' : ''; ?> class="masterstudy-group-fields-form__additional-fields">
		<label for="<?php echo esc_attr( $id . '-' . $key ); ?>"><?php echo esc_html( $choice ); ?></label>
	</div>
	<?php
endforeach;
if ( $description ) :
	?>
	<div class="masterstudy-group-fields-form__item-description"><?php echo esc_html( $description ); ?></div>
<?php endif; ?>
