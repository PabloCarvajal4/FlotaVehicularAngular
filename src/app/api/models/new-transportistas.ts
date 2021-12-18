/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Transportistas, 'id'>, schemaOptions: { title: 'NewTransportistas', exclude: [ 'id' ] })
 */
export interface NewTransportistas {
  identidad: string;
  licencia: string;
  nombre: string;

  [key: string]: any;
}
