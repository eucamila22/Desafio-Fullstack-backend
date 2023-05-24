import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm'
import { Client } from './client.entity'

@Entity('contacts')
class Contact {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45 })
    full_name: string

    @Column({ type: 'varchar', length: 45 })
    email: string

    @Column({ type: 'varchar', length: 12 })
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @ManyToOne(() => Client, (client) => client.contact)
    @JoinColumn()
    client: Client
}

export { Contact }
