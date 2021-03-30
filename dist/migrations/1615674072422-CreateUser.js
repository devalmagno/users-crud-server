"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1615674072422 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1615674072422 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "cpf",
                    type: "varchar"
                },
                {
                    name: "isActive",
                    type: "boolean"
                },
                {
                    name: "systemEntry",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUser1615674072422 = CreateUser1615674072422;
