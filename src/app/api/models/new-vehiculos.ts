/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Vehiculos, 'id'>, schemaOptions: { title: 'NewVehiculos', exclude: [ 'id' ] })
 */
export interface NewVehiculos {
  color: string;
  marca: string;
  placa: string;
  tipo: string;

  [key: string]: any;
}
