import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './userController';
import { UsuarioRepository } from './userrepository';
import { EmailEhUnicoValidator } from './Validation/validatorEmail';
import { UsuarioService } from './userService';
import { UsuarioEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
