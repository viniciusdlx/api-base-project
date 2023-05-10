import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';
import { CreateClientUseCase } from '../use-cases/create-client.use-case';
import { CreateClientDto } from './../../presentation/dtos/create-client.dto';
import { FindAllClientsUseCase } from './../use-cases/find-all-clients.use-case';

@Injectable()
export class ClientService {
    constructor(
        private readonly createClientUseCase: CreateClientUseCase,
        private readonly findAllClientsUseCase: FindAllClientsUseCase,
    ) {}

    async create(createClientDto: CreateClientDto): Promise<Client> {
        return await this.createClientUseCase.execute(createClientDto);
    }

    async findAll(): Promise<Client[]> {
        return await this.findAllClientsUseCase.execute();
    }
}
