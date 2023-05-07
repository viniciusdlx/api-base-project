import * as admin from 'firebase-admin';

export class FindUsersUseCase {
    async execute() {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: 'YOUR_PROJECT_ID',
                clientEmail: 'YOUR_CLIENT_EMAIL',
                privateKey: 'YOUR_PRIVATE_KEY',
            }),
            databaseURL: 'https://YOUR_PROJECT_ID.firebaseio.com',
        });

        const uid = 'some-uid'; // ID do usuário do seu sistema
        const additionalClaims = {
            cliente: 'CLIENTE1',
            tokens: {
                App_TOKEN: 'abcdc123',
                App_Key: 'adwada232',
                WebexToken: '239dw9awd',
                IuguToken: 'dawdaw9daw',
            },
        };

        const customToken = await admin
            .auth()
            .createCustomToken(uid, additionalClaims);
        return 'users';
    }
}
