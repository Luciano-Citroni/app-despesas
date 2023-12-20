import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/Users_Model';
import { generateUUID } from '../../utils/uuid';

Entity('expenses');
export class Expenses {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('text')
    description: string;

    @Column('double')
    price: number;

    @ManyToOne(() => Users, (users) => users.id)
    @Column({ name: 'fk_users' })
    fkUser: string;

    @Column()
    payday: Date;

    @Column({ name: 'status_payment', type: 'tinyint' })
    statusPayment: boolean;

    @Column({ name: 'date_created', type: 'timestamp' })
    dateCreated: Date;

    constructor() {
        if (!this.id) {
            this.id = generateUUID();
        }
    }
}
