import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { ClientEvents } from '../../domain/events/client.events';
import { ClientService } from '../../domain/services/client.service';
import { CreateClientDto } from '../dtos/create-client.dto';

@ApiBearerAuth()
@ApiTags('clients')
@Controller('clients')
export class ClientController {
    constructor(
        private readonly clientService: ClientService,
        private readonly clientEvents: ClientEvents,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create Client' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(
        @Body() createClientDto: CreateClientDto,
        @Res() res: Response,
    ) {
        try {
            const createdClient = await this.clientService.create(
                createClientDto,
            );
            return res.status(HttpStatus.CREATED).send({
                statusCode: HttpStatus.CREATED,
                data: createdClient,
            });
        } catch (error) {
            console.log('error.message -> ', error.message);
            return res.status(HttpStatus.BAD_REQUEST).send({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const clients = await this.clientService.findAll();
            return res.status(HttpStatus.OK).send({
                statusCode: HttpStatus.OK,
                data: clients,
            });
        } catch (error) {
            console.log('error.message -> ', error.message);
            return res.status(HttpStatus.BAD_REQUEST).send({
                statusCode: HttpStatus.BAD_REQUEST,
                message: error.message,
            });
        }
    }

    @Get('events')
    async sendCreatedClientEvent(@Res() res: Response) {
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders();

        const clientCreatedListener = (client) => {
            res.write(`${JSON.stringify(client)}`);
        };

        this.clientEvents.addListener(
            ClientEvents.clientCreated,
            clientCreatedListener,
        );

        res.on('close', () => {
            this.clientEvents.removeListener(
                ClientEvents.clientCreated,
                clientCreatedListener,
            );
            res.end();
        });
    }
}
