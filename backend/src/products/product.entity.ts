import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({ name: 'products'})
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'product_name', nullable: false})
    productName: string;

    @Column({ name: 'code', nullable: false, unique: true})
    code: string;

    @Column({name: 'expiration_date', type: 'date' })
    expirationDate: Date;
}




