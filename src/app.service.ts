import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';
import * as process from 'process';

@Injectable()
export class AppService {
	constructor() {} // private readonly logger: WinstonLogger // @Inject(WINSTON_MODULE_NEST_PROVIDER)
	getHello(): string {
		// try {
		// 	this.logger.log('hello world!!!!');
		// } catch (e) {
		// 	console.log(e);
		// }

		return process.env.NODE_ENV;
	}
}
