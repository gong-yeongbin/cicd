import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		WinstonModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				return {
					level: 'info',
					format: format.combine(
						format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
						format.printf((info) => `${info.timestamp} [${info.level}] : ${info.message}`)
					),
					transports: [
						configService.get<string>('app.env') === 'dev'
							? new transports.Console({
									format: format.combine(format.colorize(), format.simple()),
							  })
							: new WinstonCloudWatch({
									awsOptions: {
										credentials: { accessKeyId: configService.get<string>('aws.accessKey'), secretAccessKey: configService.get<string>('aws.secretKey') },
										region: configService.get<string>('aws.region'),
									},
									logGroupName: configService.get<string>('aws.cloudwatch.groupName'),
									logStreamName: `${configService.get<string>('aws.cloudwatch.groupName')}-${configService.get<string>('app.env')}`,
									messageFormatter: ({ level, message }) => `[${level}] : ${message}`,
							  }),
					],
				};
			},
		}),
	],
})
export class LoggerModule {}
