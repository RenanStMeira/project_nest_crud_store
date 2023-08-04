import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { StatusPedido } from './Enum/statusPedido.enum';
import { UsuarioEntity } from '../User/user.entity';
import { ItemOrderEntity } from './itemOrder.entity';
  
  @Entity({ name: 'order' })
  export class OrderEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ name: 'valor_total', nullable: false })
    valorTotal: number;
  
    @Column({ name: 'status', enum: StatusPedido, nullable: false })
    status: StatusPedido;
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    //Relacionando com users
    @ManyToOne(() => UsuarioEntity, (user) => user.oders)
    user: UsuarioEntity;

    //Relacionar com itemOrder um pra muitos
    @OneToMany(() => ItemOrderEntity, (itemOrder) =>  itemOrder.order, {
      cascade: true,
    })
      itemOrder: ItemOrderEntity[];
    itensPedido: any;
  }