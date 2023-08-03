import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceoptions: DataSourceOptions = {
    
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: [__dirname + '/migrations/*.{js,ts}'],
        synchronize: true,

      
};

const dataSource = new DataSource(dataSourceoptions);

export default dataSource;
