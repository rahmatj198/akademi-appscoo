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
 * @var string $extensions
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
	<?php
endif;

STM_LMS_Templates::show_lms_template(
	'components/file-upload',
	array(
		'id'                     => $type,
		'attachments'            => array(),
		'allowed_extensions'     => explode( ', ', $extensions ),
		'files_limit'            => '',
		'allowed_filesize'       => '',
		'allowed_filesize_label' => '',
		'readonly'               => false,
		'multiple'               => false,
		'dark_mode'              => false,
	)
);
STM_LMS_Templates::show_lms_template(
	'components/alert',
	array(
		'id'                  => 'form_builder_file_alert',
		'title'               => esc_html__( 'Delete file', 'masterstudy-lms-learning-management-system' ),
		'text'                => esc_html__( 'Are you sure you want to delete this file?', 'masterstudy-lms-learning-management-system' ),
		'submit_button_text'  => esc_html__( 'Delete', 'masterstudy-lms-learning-management-system' ),
		'cancel_button_text'  => esc_html__( 'Cancel', 'masterstudy-lms-learning-management-system' ),
		'submit_button_style' => 'danger',
		'cancel_button_style' => 'tertiary',
		'dark_mode'           => false,
	)
);
?>
<div class="masterstudy-group-fields-form__item-file">
	<input type="hidden" data-label="<?php echo esc_html( $label ); ?>" data-extensions="<?php echo esc_html( $extensions ); ?>" class="masterstudy-group-fields-form__additional-fields">
</div>
<?php
if ( $description ) :
	?>
	<div class="masterstudy-group-fields-form__item-description"><?php echo esc_html( $description ); ?></div>
<?php endif; ?>
