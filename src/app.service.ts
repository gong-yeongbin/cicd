import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';
import * as process from 'process';

@Injectable()
export class AppService {
	constructor(
		@Inject(WINSTON_MODULE_NEST_PROVIDER)
		private readonly logger: WinstonLogger
	) {}
	getHello(): string {
		try {
			this.logger.log('hello world!!!!');
		} catch (e) {
			console.log(e);
		}

		return process.env.NODE_ENV;
	}
}
