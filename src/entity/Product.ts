import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import { Category } from './Category';
import { Supplier } from './Supplier';

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  short_description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  list_price: number;

  @Column({default: true})
  sell_price: number;

  @Column()
  status: boolean;

  @ManyToOne(() => Category, (category: Category) => category.products)
  category: Category

  @ManyToOne(() => Supplier, (supplier: Supplier) => supplier.products)
  supplier: Supplier
  
}