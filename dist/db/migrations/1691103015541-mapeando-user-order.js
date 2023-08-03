"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapeandoUserOrder1691103015541 = void 0;
class MapeandoUserOrder1691103015541 {
    constructor() {
        this.name = 'MapeandoUserOrder1691103015541';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "valor_total" integer NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "userId" uuid, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }
}
exports.MapeandoUserOrder1691103015541 = MapeandoUserOrder1691103015541;
//# sourceMappingURL=1691103015541-mapeando-user-order.js.map