import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm'
import { Product } from './Product';

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  logo: string;

  @OneToMany(() => Product, (product: Product) => product.supplier)
  products: Product[];

  
}