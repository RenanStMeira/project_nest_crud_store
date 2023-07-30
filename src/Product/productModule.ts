import { Module } from '@nestjs/common';
import { UsuarioModule } from '../User/userModule';
import { ProdutoController } from './productController';
import { ProdutoRepository } from './productRepository';

@Module({
  imports: [UsuarioModule],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
