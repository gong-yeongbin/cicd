import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
	app: {
		port: parseInt(process.env.PORT) || 3000,
	},
	postgre: {
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT) || 5432,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	},
});
