import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ProdutoCaracteristicaEntity } from './productCaracter.entity';
import { ProdutoImagemEntity } from './productImage.entity';

@Entity({ name: 'produtos' })
export class ProdutoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'valor', nullable: false })
  valor: number;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;

  @Column({ name: 'categoria', length: 100, nullable: false })
  categoria: string;

  @OneToMany(() => ProdutoCaracteristicaEntity,
  (produtoCaracteristicaEntity) =>  produtoCaracteristicaEntity.produto, { cascade: true, eager: true })
  caracteristicas: ProdutoCaracteristicaEntity[];

  @OneToMany(() => ProdutoImagemEntity,
  (produtoImagemEntity) =>  produtoImagemEntity.produto, { cascade: true, eager: true })
  imagens: ProdutoImagemEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  // caracteristicas: CaracteristicaProduto[];
  // imagens: ImagemProduto[];
}