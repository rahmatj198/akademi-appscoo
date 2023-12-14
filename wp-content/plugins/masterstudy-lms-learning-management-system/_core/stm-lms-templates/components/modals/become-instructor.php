<?php
/**
 * @var string $current_user
 *
 * data-masterstudy-modal="masterstudy-become-instructor-modal" - js trigger
 */

wp_enqueue_style( 'masterstudy-group-fields' );
wp_enqueue_script( 'masterstudy-group-fields' );
wp_enqueue_style( 'masterstudy-become-instructor-modal' );
wp_enqueue_script( 'masterstudy-become-instructor-trigger' );
wp_enqueue_script( 'masterstudy-become-instructor-request' );

wp_localize_script(
	'masterstudy-become-instructor-request',
	'masterstudy_become_instructor_request_data',
	array(
		'ajax_url'  => admin_url( 'admin-ajax.php' ),
		'get_nonce' => wp_create_nonce( 'stm_lms_become_instructor' ),
	)
);

wp_localize_script(
	'masterstudy-group-fields',
	'masterstudy_group_fields_data',
	array(
		'ajax_url'          => admin_url( 'admin-ajax.php' ),
		'get_nonce'         => wp_create_nonce( 'stm_lms_upload_form_file' ),
		'file_upload_nonce' => wp_create_nonce( 'stm_lms_upload_form_file' ),
		'file_delete_nonce' => wp_create_nonce( 'stm_lms_delete_form_file' ),
		'icon_url'          => esc_url( STM_LMS_URL . '/assets/icons/files/new/' ),
		'only_one_file'     => __( 'Only one file allowed', 'masterstudy-lms-learning-management-system' ),
		'additional_fields' => $additional_fields['register'] ?? array(),
	)
);

$forms                  = get_option( 'stm_lms_form_builder_forms', array() );
$become_instructor_form = array();
if ( class_exists( 'STM_LMS_Form_Builder' ) && ! empty( $forms ) && is_array( $forms ) ) {
	foreach ( $forms as $form ) {
		if ( 'become_instructor' === $form['slug'] ) {
			$become_instructor_form = $form['fields'];
		}
	}
}
?>
<div class="masterstudy-become-instructor-modal">
	<div class="masterstudy-become-instructor-modal__wrapper">
		<div class="masterstudy-become-instructor-modal__header">
			<h2><?php echo esc_html__( 'Become an instructor', 'masterstudy-lms-learning-management-system' ); ?></h2>
			<span class="masterstudy-become-instructor-modal__header-title-close stmlms-close"></span>
		</div>
		<div class="masterstudy-become-instructor-modal__content">
			<div class="masterstudy-group-fields">
				<form class="masterstudy-group-fields-form">
					<?php if ( ! empty( $become_instructor_form ) ) : ?>
					<div class="masterstudy-group-fields-form__multiple">
						<?php foreach ( $become_instructor_form as $form_field ) : ?>
							<div class="masterstudy-group-fields-form__item">
							<?php
							$form_field_template = in_array( $form_field['type'], array( 'text', 'tel', 'email' ), true ) ? 'default' : $form_field['type'];
							STM_LMS_Templates::show_lms_template(
								'components/group-fields/' . $form_field_template,
								array(
									'type'        => $form_field['type'] ?? '',
									'field_name'  => $form_field['field_name'] ?? '',
									'id'          => $form_field['id'] ?? '',
									'slug'        => $form_field['slug'] ?? '',
									'label'       => $form_field['label'] ?? '',
									'description' => $form_field['description'] ?? '',
									'placeholder' => $form_field['placeholder'] ?? '',
									'required'    => $form_field['required'] ?? '',
									'choices'     => $form_field['choices'] ?? array(),
									'extensions'  => $form_field['extensions'] ?? '.png,.jpg,.jpeg,.mp4,.pdf',
								)
							);
							?>
							</div>
						<?php endforeach; ?>
					</div>
					<?php else : ?>
					<div class="masterstudy-group-fields-form__item">
						<label for="masterstudy-group-fields-degree"><?php esc_html_e( 'Degree', 'masterstudy-lms-learning-management-system' ); ?></label>
						<input type="text" name="degree" placeholder="<?php esc_html_e( 'Enter degree', 'masterstudy-lms-learning-management-system' ); ?>" id="masterstudy-group-fields-degree" required>
					</div>
					<div class="masterstudy-group-fields-form__item">
						<label for="masterstudy-group-fields-expertise"><?php esc_html_e( 'Expertise', 'masterstudy-lms-learning-management-system' ); ?></label>
						<input type="text" name="expertize" placeholder="<?php esc_html_e( 'Enter expertise', 'masterstudy-lms-learning-management-system' ); ?>" id="masterstudy-group-fields-expertise" required>
					</div>
						<?php
					endif;
					?>
					<button type="submit"><?php echo esc_html__( 'Send application', 'masterstudy-lms-learning-management-system' ); ?></button>
				</form>
				<div class="masterstudy-group-fields-request__message"></div>
			</div>
		</div>
	</div>
	<div class="masterstudy-become-instructor-modal__close"></div>
</div>
