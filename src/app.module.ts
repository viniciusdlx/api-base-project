import { Module } from '@nestjs/common';
import { ClientModule } from './modules/client/client.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
    imports: [PrismaModule, ClientModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
