import { Message } from 'node-nats-streaming'
import { Listener } from "../../../common/src/events/base-listener";
import { Subjects } from '@daksh0702tickets/common'
import { TicketCreatedEvent } from '../../../common/src/events/ticket-created-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent>{
    readonly subject:Subjects.TicketCreated = Subjects.TicketCreated
    queueGroupName = 'payment-service';
    onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
        console.log('Event data!',data)

        msg.ack()
    }
}