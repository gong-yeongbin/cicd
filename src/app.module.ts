import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './configs/configratioin';
import { LoggerModule } from './modules/logger.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [config],
		}),
		LoggerModule,
		// PostgresModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
