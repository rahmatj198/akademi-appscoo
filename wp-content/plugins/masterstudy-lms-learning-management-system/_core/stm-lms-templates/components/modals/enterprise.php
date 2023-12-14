<?php
/**
 * @var string $current_user
 *
 * data-masterstudy-modal="masterstudy-enterprise-modal" - js trigger
 */

wp_enqueue_style( 'masterstudy-enterprise-modal' );
wp_enqueue_style( 'masterstudy-group-fields' );
wp_enqueue_script( 'masterstudy-group-fields' );
wp_enqueue_script( 'masterstudy-enterprise-trigger' );
wp_enqueue_script( 'masterstudy-enterprise-request' );
wp_enqueue_script( 'masterstudy-enterprise-file-upload' );

wp_localize_script(
	'masterstudy-enterprise-request',
	'masterstudy_enterprise_request_data',
	array(
		'ajax_url'  => admin_url( 'admin-ajax.php' ),
		'get_nonce' => wp_create_nonce( 'stm_lms_enterprise' ),
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

$forms           = get_option( 'stm_lms_form_builder_forms', array() );
$enterprise_form = array();
if ( class_exists( 'STM_LMS_Form_Builder' ) && ! empty( $forms ) && is_array( $forms ) ) {
	foreach ( $forms as $form ) {
		if ( 'enterprise_form' === $form['slug'] ) {
			$enterprise_form = $form['fields'];
		}
	}
}
?>
<div class="masterstudy-enterprise-modal">
	<div class="masterstudy-enterprise-modal__wrapper">
		<div class="masterstudy-enterprise-modal__header">
			<h2><?php echo esc_html__( 'Have a question?', 'masterstudy-lms-learning-management-system' ); ?></h2>
			<span class="masterstudy-enterprise-modal__header-title-close stmlms-close"></span>
		</div>
		<div class="masterstudy-enterprise-modal__content">
			<div class="masterstudy-group-fields">
				<form class="masterstudy-group-fields-form">
					<?php if ( ! empty( $enterprise_form ) ) : ?>
						<div class="masterstudy-group-fields-form__multiple">
							<?php foreach ( $enterprise_form as $form_field ) : ?>
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
											'extensions'  => ! empty( $form_field['extensions'] ) ? $form_field['extensions'] : '.png,.jpg,.jpeg,.mp4,.pdf',
										)
									);
									?>
								</div>
							<?php endforeach; ?>
						</div>
					<?php else : ?>
						<div class="masterstudy-group-fields-form__item">
							<label for="masterstudy-group-fields-name"><?php esc_html_e( 'Name', 'masterstudy-lms-learning-management-system' ); ?></label>
							<input type="text" name="name" placeholder="<?php esc_html_e( 'Enter your name', 'masterstudy-lms-learning-management-system' ); ?>" id="masterstudy-group-fields-name" required>
						</div>
						<div class="masterstudy-group-fields-form__item">
							<label for="masterstudy-group-fields-email"><?php esc_html_e( 'E-mail', 'masterstudy-lms-learning-management-system' ); ?></label>
							<input type="email" name="email" placeholder="<?php esc_html_e( 'Enter Your Email', 'masterstudy-lms-learning-management-system' ); ?>" id="masterstudy-group-fields-email" required>
						</div>
						<div class="masterstudy-group-fields-form__item">
							<label for="masterstudy-group-fields-message"><?php esc_html_e( 'Message', 'masterstudy-lms-learning-management-system' ); ?></label>
							<textarea name="textarea" placeholder="<?php esc_html_e( 'Enter Your Message', 'masterstudy-lms-learning-management-system' ); ?>" id="masterstudy-group-fields-message" required></textarea>
						</div>
						<?php
					endif;
					?>
					<button type="submit"><?php echo esc_html__( 'Send Enquiry', 'masterstudy-lms-learning-management-system' ); ?></button>
				</form>
				<div class="masterstudy-group-fields-request__message"></div>
			</div>
		</div>
	</div>
	<div class="masterstudy-enterprise-modal__close"></div>
</div>
