import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonLogger } from 'nest-winston';

@Injectable()
export class AppService {
	constructor(
		@Inject(WINSTON_MODULE_NEST_PROVIDER)
		private readonly logger: WinstonLogger
	) {}
	getHello(): string {
		this.logger.log(process.env.AWS_ACCESS_KEY);
		return 'Hello World!!!!!!';
	}
}
