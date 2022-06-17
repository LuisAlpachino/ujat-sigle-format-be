import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('VW_SINGLE_FORMAT')
export class SingleFormat {
  @PrimaryColumn()
  PARTIDA: number;

  @Column()
  APROBADO: number;

  @Column()
  MODIFICADO: number;

  @Column()
  RECAUDADO: number;

  @Column()
  COMPROMETIDO: number;

  @Column()
  DEVENGADO: number;

  @Column()
  EJERCIDO: number;

  @Column()
  PAGADO: number;
}
