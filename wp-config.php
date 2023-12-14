<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'appscootr' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'tQK#:XNks}A/e3y#JxhJ|EC~ !@#:>7WC;_NoO]C!,#X+OW6:I{TZr3&$Wj$R2U8' );
define( 'SECURE_AUTH_KEY',  'o@s?KVzhZ0~~FMEK=/Th=K_5@7~,avAH./A:6u$.3c[%?3JTzrPv1Y^@:[J)ZFVb' );
define( 'LOGGED_IN_KEY',    'Y`>LJUrA^Sj 4I1TMmG&25:8(+RMYrjKn{$5e[xJuikH>|5w_=)?21X/K-vrqgG:' );
define( 'NONCE_KEY',        'hxW+%|f@jKyYYTNknBfpMt#=vmI6?|UIw6O99-oH<b@}s9> d4.(~r_n4YC|OgQF' );
define( 'AUTH_SALT',        'Pe#X`>`yGt:X4b/f(*G5~I9qBeqM0hs<Gns)a/L}l-TGLQ-Y;87K|^~8dR-L7t@6' );
define( 'SECURE_AUTH_SALT', 'Z5SBYO(Z+_pkvS6&}lC0-,v>B^~dqt4kTfO*8X[c%^EDDu-o|zAs2/Ajh%$`I;`B' );
define( 'LOGGED_IN_SALT',   'OI:s^[H33q0P_B9rJ{J]i[ZdxH^~t&c7F6fI~G MWKtG*n[)lr(orhClh)Mm|H/T' );
define( 'NONCE_SALT',       'UP%4S!hx)d2YSGna&u8Xx[_!5k).Uf=]qronEnl-G#0dv((yK$j13}S70$^^_iSV' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
