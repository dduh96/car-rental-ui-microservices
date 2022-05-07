/**
 * Car Rental Webservice
 * This is backend web service for the Car Rental application. For further information, please visit our [Wiki](https://se-2022.atlassian.net/wiki/)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OpeningHours } from './openingHours';


export interface Location {
    location_id?: number;
    opening_hours?: OpeningHours;
    location_name?: string;
    street_name?: string;
    street_number?: string;
    city_name?: string;
    postal_code?: number;
    email?: string;
    phone?: string;
    latitude: string;
    longitude: string;
    sagaStatus: Location.SagaStatusEnum
}

export namespace Location {
  export type SagaStatusEnum = 'CREATED' | 'FINISHED' | 'CAR_REJECTED' | 'LOCATION_REJECTED';
  export const SagaStatusEnum = {
    Created: 'CREATED' as SagaStatusEnum,
    Finished: 'FINISHED' as SagaStatusEnum,
    CarRejected: 'REJECTED' as SagaStatusEnum,
  };
}
