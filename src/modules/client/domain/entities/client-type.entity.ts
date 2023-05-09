import { ClientEntity } from './client.entity';

export class ClientTypeEntity {
    id: string;
    name: string;
    client: ClientEntity[];
}
