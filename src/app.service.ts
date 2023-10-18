import { Injectable } from '@nestjs/common';
// import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';

@Injectable()
export class AppService {
	constructor() {} // private readonly logger: WinstonLogger // @Inject(WINSTON_MODULE_NEST_PROVIDER)
	getHello(): string {
		// this.logger.log('hello world!!!!');

		return process.env.AWS_REGION;
	}
}
