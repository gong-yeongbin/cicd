import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'user',
	password: '1111',
	database: 'prj',
	entities: [__dirname + `/entities/*.entity.{js,ts}`],
	migrations: [__dirname + `/migrations/*.{js,ts}`],
};
