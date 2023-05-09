import { randomUUID } from 'crypto';
import { AddressEntity } from 'src/shared/entities/address.entity';
import { ClientTypeEntity } from './client-type.entity';

export class ClientEntity {
    id: number;
    uuid: string;
    name: string;
    cnpj: string;
    address: AddressEntity;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    clientTypeId: number;
    clientType?: ClientTypeEntity;

    constructor(
        name: string,
        cnpj: string,
        clientTypeId: number,
        address?: AddressEntity,
    ) {
        this.uuid = randomUUID();
        this.name = name;
        this.cnpj = cnpj;
        this.clientTypeId = clientTypeId;
        this.address = address;
        this.isActive = true;
    }
}
