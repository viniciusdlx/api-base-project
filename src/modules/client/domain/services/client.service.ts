import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { CreateClientUseCase } from '../use-cases/create-client.use-case';
import { CreateClientDto } from './../../presentation/dtos/create-client.dto';

@Injectable()
export class ClientService {
    constructor(private readonly createClientUseCase: CreateClientUseCase) {}

    async create(createClientDto: CreateClientDto): Promise<Client> {
        return await this.createClientUseCase.execute(createClientDto);
    }
}
