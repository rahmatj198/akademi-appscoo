<?php
/**
 * @var boolean $modal
 * @var boolean $register
 * @var boolean $dark_mode
 *
 * masterstudy-authorization_dark-mode - for dark mode
 */

wp_enqueue_style( 'masterstudy-authorization' );
wp_enqueue_script( 'masterstudy-authorization-main' );
wp_enqueue_script( 'masterstudy-authorization-ajax' );

$titles                          = array(
	'login'    => array(
		'main'    => __( 'Sign In', 'masterstudy-lms-learning-management-system' ),
		'account' => __( 'No account?', 'masterstudy-lms-learning-management-system' ),
	),
	'register' => array(
		'main'    => __( 'Sign Up', 'masterstudy-lms-learning-management-system' ),
		'account' => __( 'Have account?', 'masterstudy-lms-learning-management-system' ),
	),
);
$social_addon_fb                 = false;
$social_addon_google             = false;
$third_party_social              = false;
$social_position                 = 'top';
$titles['login']['separator']    = 'bottom' === $social_position ? __( 'or sign in with socials', 'masterstudy-lms-learning-management-system' ) : __( 'or sign in with email', 'masterstudy-lms-learning-management-system' );
$titles['register']['separator'] = 'bottom' === $social_position ? __( 'or sign up with socials', 'masterstudy-lms-learning-management-system' ) : __( 'or sign up with email', 'masterstudy-lms-learning-management-system' );
$gdpr_warning                    = STM_LMS_Options::get_option( 'gdpr_warning' );
$gdpr_page                       = STM_LMS_Options::get_option( 'gdpr_page' );
$email_confirmation              = STM_LMS_Options::get_option( 'user_premoderation', false );
$recaptcha_enabled               = STM_LMS_Helpers::g_recaptcha_enabled();
$recaptcha                       = $recaptcha_enabled ? STM_LMS_Helpers::g_recaptcha_keys() : '';
$recaptcha_site_key              = ! empty( $recaptcha['public'] ) ? stm_lms_filtered_output( $recaptcha['public'] ) : false;

if ( class_exists( 'STM_LMS_Form_Builder' ) ) {
	$additional_fields = STM_LMS_Form_Builder::register_form_fields();
	$default_fields    = STM_LMS_Form_Builder::profile_default_fields_for_register();
}
?>
<script>
let authorization_data = {
	'register_nonce': '<?php echo esc_html( wp_create_nonce( 'stm_lms_register' ) ); ?>',
	'login_nonce': '<?php echo esc_html( wp_create_nonce( 'stm_lms_login' ) ); ?>',
	'restore_nonce': '<?php echo esc_html( wp_create_nonce( 'stm_lms_lost_password' ) ); ?>',
	'file_upload_nonce': '<?php echo esc_html( wp_create_nonce( 'stm_lms_upload_form_file' ) ); ?>',
	'file_delete_nonce': '<?php echo esc_html( wp_create_nonce( 'stm_lms_delete_form_file' ) ); ?>',
	'icon_url': '<?php echo esc_url( STM_LMS_URL . '/assets/icons/files/new/' ); ?>',
	'only_one_file': '<?php echo esc_html__( 'Only one file allowed', 'masterstudy-lms-learning-management-system' ); ?>',
	'ajax_url': '<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>',
	'email_confirmation': '<?php echo esc_html( $email_confirmation ); ?>',
	'recaptcha_site_key': '<?php echo esc_html( $recaptcha_site_key ); ?>',
	'default_fields': <?php echo wp_json_encode( $default_fields ?? array() ); ?>,
	'additional_fields': <?php echo wp_json_encode( $additional_fields['register'] ?? array() ); ?>,
};
let authorization_settings = {
	'register_mode': '<?php echo esc_html( $register ); ?>',
	'titles': <?php echo wp_json_encode( $titles ); ?>,
};
</script>
<?php
if ( $recaptcha_enabled ) {
	wp_enqueue_script( 'stm_grecaptcha' );
}

if ( ! isset( $dark_mode ) ) {
	global $masterstudy_course_player_template;
	$settings  = get_option( 'stm_lms_settings', array() );
	$dark_mode = $masterstudy_course_player_template ? $settings['course_player_theme_mode'] ?? false : false;
}

$classes = implode(
	' ',
	array_filter(
		array(
			$dark_mode ? 'masterstudy-authorization_dark-mode' : '',
			$modal ? 'masterstudy-authorization_style-modal' : '',
			$register ? 'masterstudy-authorization_register' : 'masterstudy-authorization_login',
		)
	)
);

if ( $modal ) {
	?>
	<div class="masterstudy-authorization-modal <?php echo esc_attr( $dark_mode ? 'masterstudy-authorization-modal_dark-mode' : '' ); ?>" style="opacity:0">
		<div class="masterstudy-authorization-modal__wrapper">
			<div class="masterstudy-authorization-modal__container">
				<span class="masterstudy-authorization-modal__close"></span>
<?php } ?>
<div class="masterstudy-authorization <?php echo esc_attr( $classes ); ?>">
	<div class="masterstudy-authorization__wrapper">
		<div class="masterstudy-authorization__header">
			<span class="masterstudy-authorization__header-title">
				<?php echo esc_html( $register ? $titles['register']['main'] : $titles['login']['main'] ); ?>
			</span>
		</div>
		<?php
		if ( apply_filters( 'masterstudy_authorization_demo_login', false ) ) {
			STM_LMS_Templates::show_lms_template( 'components/authorization/demo-login' );
		}
		if ( $social_addon_fb || $social_addon_google ) {
			STM_LMS_Templates::show_lms_template(
				'components/authorization/social',
				array(
					'facebook'        => $social_addon_fb,
					'google'          => $social_addon_google,
					'social_position' => $social_position,
				)
			);
		} elseif ( defined( 'NSL_PATH_FILE' ) && apply_filters( 'stm_lms_show_social_login', true ) ) {
			$third_party_social = $social_addon_fb || $social_addon_google ? false : true;
			echo do_shortcode( '[nextend_social_login]' );
		}
		if ( $social_addon_fb || $social_addon_google || $third_party_social ) {
			?>
			<div class="masterstudy-authorization__separator <?php echo esc_attr( 'bottom' === $social_position ? 'masterstudy-authorization__separator_bottom' : '' ); ?>">
				<span class="masterstudy-authorization__separator-line"></span>
				<span class="masterstudy-authorization__separator-title">
					<?php echo esc_html( $register ? $titles['register']['separator'] : $titles['login']['separator'] ); ?>
				</span>
				<span class="masterstudy-authorization__separator-line"></span>
			</div>
			<?php
		}
		STM_LMS_Templates::show_lms_template( 'components/authorization/login-form' );
		STM_LMS_Templates::show_lms_template(
			'components/authorization/register-form',
			array(
				'default_fields'    => ! empty( $default_fields ) ? $default_fields : array(),
				'additional_fields' => ! empty( $additional_fields['register'] ) ? $additional_fields['register'] : array(),
				'dark_mode'         => $dark_mode,
			)
		);
		if ( ! empty( $gdpr_page ) && ! empty( $gdpr_warning ) ) {
			STM_LMS_Templates::show_lms_template(
				'components/authorization/gdpr',
				array(
					'gdpr_page'    => $gdpr_page,
					'gdpr_warning' => $gdpr_warning,
				)
			);
		}
		?>
		<div class="masterstudy-authorization__actions">
			<div class="masterstudy-authorization__actions-remember">
				<div class="masterstudy-authorization__checkbox">
					<input type="checkbox" name="masterstudy-authorization-remember" id="masterstudy-authorization-remember"/>
					<span class="masterstudy-authorization__checkbox-wrapper"></span>
				</div>
				<span class="masterstudy-authorization__checkbox-title">
					<?php echo esc_html__( 'Remember me', 'masterstudy-lms-learning-management-system' ); ?>
				</span>
			</div>
			<?php
			STM_LMS_Templates::show_lms_template(
				'components/button',
				array(
					'id'    => 'masterstudy-authorization-login-button',
					'title' => __( 'Sign In', 'masterstudy-lms-learning-management-system' ),
					'link'  => '#',
					'style' => 'primary',
					'size'  => 'sm',
				)
			);
			?>
			<?php
			STM_LMS_Templates::show_lms_template(
				'components/button',
				array(
					'id'    => 'masterstudy-authorization-register-button',
					'title' => __( 'Sign Up', 'masterstudy-lms-learning-management-system' ),
					'link'  => '#',
					'style' => 'primary',
					'size'  => 'sm',
				)
			);
			?>
		</div>
	</div>
	<?php
	STM_LMS_Templates::show_lms_template( 'components/authorization/restore-password' );
	STM_LMS_Templates::show_lms_template(
		'components/authorization/restore-pass-email',
		array(
			'modal' => $modal,
		)
	);
	if ( $email_confirmation ) {
		STM_LMS_Templates::show_lms_template(
			'components/authorization/email-confirmation',
			array(
				'modal' => $modal,
			)
		);
	}
	?>
	<div class="masterstudy-authorization__switch">
		<div class="masterstudy-authorization__switch-wrapper">
			<div class="masterstudy-authorization__switch-account">
				<span class="masterstudy-authorization__switch-account-title">
					<?php echo esc_html( $register ? $titles['register']['account'] : $titles['login']['account'] ); ?>
				</span>
				<a href="#" id="masterstudy-authorization-sign-up" class="masterstudy-authorization__switch-account-link">
					<?php echo esc_html__( 'Sign Up', 'masterstudy-lms-learning-management-system' ); ?>
				</a>
				<a href="#" id="masterstudy-authorization-sign-in" class="masterstudy-authorization__switch-account-link">
					<?php echo esc_html__( 'Sign In', 'masterstudy-lms-learning-management-system' ); ?>
				</a>
			</div>
			<span class="masterstudy-authorization__switch-lost-pass">
					<?php echo esc_html__( 'Lost Password?', 'masterstudy-lms-learning-management-system' ); ?>
			</span>
		</div>
	</div>
</div>
<?php if ( $modal ) { ?>
		</div>
	</div>
</div>
<?php } ?>
