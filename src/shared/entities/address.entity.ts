import { User } from '@prisma/client';
import { ClientEntity } from 'src/modules/client/domain/entities/client.entity';

export class AddressEntity {
    id: number;
    cep: string;
    country: string;
    state: string;
    city: string;
    streetName: string;
    streetNumber: string;
    complement: string;
    userId?: number;
    clientId?: number;
    user?: User;
    client?: ClientEntity;

    constructor(
        cep: string,
        country: string,
        state: string,
        city: string,
        streetName: string,
        streetNumber?: string,
        complement?: string,
        userId?: number,
        clientId?: number,
    ) {
        this.cep = cep;
        this.country = country;
        this.state = state;
        this.city = city;
        this.streetName = streetName;
        this.streetNumber = streetNumber;
        this.complement = complement;
        this.userId = userId;
        this.clientId = clientId;
    }
}
