import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { UsuarioEntity } from '../User/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, UsuarioEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
