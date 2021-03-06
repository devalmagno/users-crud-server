import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class Users {

    @PrimaryColumn("uuid")
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    isActive: boolean;
    
    @CreateDateColumn()
    systemEntry: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        } 
    }
}

export { Users };