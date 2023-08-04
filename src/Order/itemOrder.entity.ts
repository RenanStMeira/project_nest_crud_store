import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
  } from 'typeorm';
import { StatusPedido } from './Enum/statusPedido.enum';
import { UsuarioEntity } from '../User/user.entity';
import { OrderEntity } from './order.entity';
  
  @Entity({ name: 'itens_pedidos' })
  export class ItemOrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'quantidade', nullable: false })
    quantidade: number;
  
    @Column({ name: 'preco_venda', nullable: false })
    precoVenda: number;
  
    //Relacionando 

    @ManyToOne(() => OrderEntity, (order) => order.itemOrder, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })

    order: OrderEntity;
}