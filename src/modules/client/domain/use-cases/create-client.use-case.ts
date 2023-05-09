import { Inject } from '@nestjs/common';
import { Client } from '@prisma/client';
import * as admin from 'firebase-admin';
import { CreateClientDto } from '../../presentation/dtos/create-client.dto';
import { ClientEntity } from '../entities/client.entity';
import { ClientGatewayInterface } from './../../infra/gateways/client-gateway-interface';

export class CreateClientUseCase {
    constructor(
        @Inject('ClientGatewayInterface')
        private readonly clientGateway: ClientGatewayInterface,
    ) {}

    async execute(createClientDto: CreateClientDto): Promise<Client> {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: 'deft-medium-365119',
                clientEmail:
                    'firebase-adminsdk-uq5go@deft-medium-365119.iam.gserviceaccount.com',
                privateKey: process.env.PRIVATE_KEY,
            }),
            databaseURL: 'deft-medium-365119.firebaseapp.com',
        });

        const newClient = await this.newClient(createClientDto);

        console.log('newClient -> ', newClient);

        const createdClient = await this.clientGateway.create(newClient);

        const uid = createdClient.uuid; // ID do usuário do seu sistema
        // const additionalClaims = {
        //     cliente: 'SoulMed',
        //     tokens: {
        //         plataformaId: 44,
        //         tradeCredId: 11,
        //         App_TOKEN: 'abcdc123',
        //         App_Key: 'adwada232',
        //         WebexToken: '239dw9awd',
        //         IuguToken: 'dawdaw9daw',
        //     },
        // };

        admin.auth().createUser({
            uid: createdClient.uuid,
            email: 'viniciusdelimaxavier@gmail.com',
            displayName: 'SoulMed',
        });

        const providerConfig = admin.auth().listProviderConfigs;

        console.log('providerConfig -> ', providerConfig);
        // admin.auth().getUserByProviderUid(createdClient.uuid);

        // admin.auth().setCustomUserClaims(createdClient.uuid, {
        //     tokens: {
        //         plataformaId: 44,
        //         tradeCredId: 11,
        //         App_TOKEN: 'abcdc123',
        //         App_Key: 'adwada232',
        //         webexAppName: 'app-paratestes-master-webex',
        //         webexToken:
        //             'ZDE0ZDhmNGYtYmNhNy00NGNlLThmODQtNjQyYmQzODcwNmRmY2Y5M2M4YmEtYmMw_PF84_a3b2ed42-c4bc-40e5-9a24-e184f74e000e',
        //         webexRefreshToken:
        //             'MjM0MDRlOGMtNGViMC00NWJhLWEwZDYtN2Q0YmM4OTVkMmU0Njk1MDZiNmQtNDA3_PF84_a3b2ed42-c4bc-40e5-9a24-e184f74e000e',
        //         IuguToken: 'dawdaw9daw',
        //     },
        // });

        // const customToken = await admin
        //     .auth()
        //     .createCustomToken(uid, additionalClaims);

        // console.log('customToken -> ', customToken);

        return createdClient;
    }

    private async newClient(
        createClientDto: CreateClientDto,
    ): Promise<ClientEntity> {
        return new ClientEntity(
            createClientDto.name,
            createClientDto.cnpj,
            createClientDto.clientTypeId,
        );
    }
}
