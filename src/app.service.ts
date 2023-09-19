import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigService) {}
	getHello(): string {
		console.log(this.configService.get('postgre.username'));
		console.log(this.configService.get('postgre.port'));
		console.log(this.configService.get('postgre.password'));

		return 'Hello World!';
	}
}
