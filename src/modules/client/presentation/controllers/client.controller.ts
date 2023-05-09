import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { ClientService } from '../../domain/services/client.service';
import { CreateClientDto } from '../dtos/create-client.dto';

@ApiBearerAuth()
@ApiTags('clients')
@Controller('clients')
export class ClientController {
    constructor(private readonly clientService: ClientService) {}

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
}
