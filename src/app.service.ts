import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(
		@Inject(WINSTON_MODULE_NEST_PROVIDER)
		private readonly logger: WinstonLogger,
		private readonly configService: ConfigService
	) {}
	getHello(): string {
		this.logger.log(`hello world ${this.configService.get('app.env')}`);

		return `hello world ${this.configService.get('app.env')}`;
	}
}
