import { DataSource } from 'typeorm';
import configration from '../configs/configratioin';

const config = configration();

export const dataSource: DataSource = new DataSource({
	type: 'postgres',
	host: config.postgre.host,
	port: config.postgre.port,
	username: config.postgre.username,
	password: config.postgre.password,
	database: config.postgre.database,
	migrations: [__dirname + `/migrations/*.{js,ts}`],
});
