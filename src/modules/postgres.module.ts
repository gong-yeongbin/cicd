import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get<string>('postgre.host'),
				port: configService.get<number>('postgre.port'),
				username: configService.get<string>('postgre.username'),
				password: configService.get<string>('postgre.password'),
				database: configService.get<string>('postgre.database'),
				entities: [__dirname + `/entities/*.entity.{js,ts}`],
				synchronize: false,
			}),
		}),
	],
})
export class PostgresModule {}
