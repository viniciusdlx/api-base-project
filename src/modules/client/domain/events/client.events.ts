import { EventEmitter } from 'stream';

export class ClientEvents extends EventEmitter {
    static clientCreated = 'clientCreated';
}
