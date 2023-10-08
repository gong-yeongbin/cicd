import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './configs/configratioin';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [config],
		}),
		// TypeOrmModule.forRootAsync({
		// 	inject: [ConfigService],
		// 	useFactory: async (configService: ConfigService) => ({
		// 		type: 'postgres',
		// 		host: configService.get<string>('postgre.host'),
		// 		port: configService.get<number>('postgre.port'),
		// 		username: configService.get<string>('postgre.username'),
		// 		password: configService.get<string>('postgre.password'),
		// 		database: configService.get<string>('postgre.database'),
		// 		entities: [__dirname + `/entities/*.entity.{js,ts}`],
		// 		synchronize: false,
		// 	}),
		// }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
