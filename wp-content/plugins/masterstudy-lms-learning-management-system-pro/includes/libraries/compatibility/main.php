<?php
if ( is_admin() ) {

	require_once STM_LMS_PRO_INCLUDES . '/libraries/admin-notices/admin-notices.php';

	$init_data = array(
		'install-free',
		'compatible',
	);

	if ( ! defined( 'STM_LMS_PATH' ) ) {
		$init_data['install-free'] = array(
			'notice_type'          => 'animate-triangle-notice',
			'notice_logo'          => 'attent_triangle.svg',
			'notice_title'         => esc_html__( 'Please install MasterStudy LMS WordPress Plugin!', 'masterstudy-lms-learning-management-system-pro' ),
			'notice_desc'          => esc_html__( 'Learning Management System, eLearning, Online Courses from WordPress.org', 'masterstudy-lms-learning-management-system-pro' ),
			'notice_btn_one_title' => esc_html__( 'Install', 'masterstudy-lms-learning-management-system-pro' ),
			'notice_btn_one'       => 'https://downloads.wordpress.org/plugin/masterstudy-lms-learning-management-system.zip',
			'notice_btn_one_class' => 'stm_lms_install_button',
		);
	} else {
		$has_pro = defined( 'MS_LMS_FILE' );
		if ( ! $has_pro ) {
			return false;
		}
		$plugin_data = get_plugin_data( MS_LMS_FILE );
		if ( version_compare( '3.0.0', $plugin_data['Version'] ) > 0 ) {
			$init_data['compatible'] = array(
				'notice_type'          => 'animate-triangle-notice',
				'notice_logo'          => 'attent_triangle.svg',
				'notice_title'         => esc_html__( 'Please update MasterStudy LMS!', 'masterstudy-lms-learning-management-system-pro' ),
				'notice_desc'          => esc_html__( 'The current version of MasterStudy LMS Pro is not compatible with old versions of the MasterStudy LMS plugin, some functionality may not work correctly or may stop working completely.', 'masterstudy-lms-learning-management-system-pro' ),
				'notice_btn_one_title' => esc_html__( 'Update', 'masterstudy-lms-learning-management-system-pro' ),
				'notice_btn_one'       => admin_url( 'plugins.php' ),
			);
		}
	}

	foreach ( $init_data as $item ) {
		stm_admin_notices_init( $item );
	}
}
