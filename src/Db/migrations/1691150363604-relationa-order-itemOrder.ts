import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationaOrderItemOrder1691150363604 implements MigrationInterface {
    name = 'RelationaOrderItemOrder1691150363604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "itens_pedidos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco_venda" integer NOT NULL, "orderId" uuid, CONSTRAINT "PK_d93e780d333fe5d91e43797e8b5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD CONSTRAINT "FK_e87d8c12b7b15e1a6c528908169" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP CONSTRAINT "FK_e87d8c12b7b15e1a6c528908169"`);
        await queryRunner.query(`DROP TABLE "itens_pedidos"`);
    }

}
