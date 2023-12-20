import { Entity, Column, PrimaryColumn } from 'typeorm';
import { generateUUID } from '../../utils/uuid';

@Entity('users')
export class Users {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor() {
        if (!this.id) {
            this.id = generateUUID();
        }
    }
}
