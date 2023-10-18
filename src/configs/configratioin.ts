import * as dotenv from 'dotenv';

dotenv.config();

export default () => ({
	app: {
		env: process.env.NODE_ENV,
		port: parseInt(process.env.PORT) || 3000,
	},
	postgre: {
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT) || 5432,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	},
	aws: {
		accessKey: process.env.AWS_ACCESS_KEY,
		secretKey: process.env.AWS_SECRET_KEY,
		region: process.env.AWS_REGION,
		cloudwatch: { groupName: process.env.AWS_CLOUDWATCH_GROUP_NAME },
	},
});
