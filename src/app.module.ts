import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutoModule } from './Product/productModule';
import { UsuarioModule } from './User/userModule';
import { PostgresConfigService } from './Config/postgres.config.service';
import { OrderModule } from './Order/order.module';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    OrderModule,
  ],
})
export class AppModule {}