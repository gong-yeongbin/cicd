import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';

@Module({
	imports: [
		WinstonModule.forRoot({
			level: 'info',
			format: format.combine(
				format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
				format.printf((info) => `${info.timestamp} [${info.level}] : ${info.message}`)
			),
			transports: [
				process.env.NODE_ENV === 'dev'
					? new transports.Console({
							format: format.combine(format.colorize(), format.simple()),
					  })
					: new WinstonCloudWatch({
							logGroupName: 'nestjs-app-logs',
							logStreamName: 'nestjs-app-logs-test',
							awsAccessKeyId: process.env.AWS_ACCESS_KEY,
							awsSecretKey: process.env.AWS_SECRET_KEY,
							awsRegion: process.env.AWS_REGION,
							messageFormatter: ({ level, message, additionalInfo }) => `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(additionalInfo)}}`,
					  }),
			],
		}),
	],
})
export class LoggerModule {}
