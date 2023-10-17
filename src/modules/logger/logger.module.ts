import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
	imports: [
		WinstonModule.forRoot({
			transports: [
				new winston.transports.Console({
					level: 'info',
					format: winston.format.combine(
						winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
						winston.format.printf((info) => `${info.timestamp} [${info.level}] : ${info.message}`)
					),
				}),
			],
		}),
	],
})
export class LoggerModule {}
