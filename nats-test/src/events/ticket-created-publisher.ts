import { Publisher } from "@daksh0702tickets/common";
import { TicketCreatedEvent } from "../../../common/src/events/ticket-created-event";
import { Subjects } from "@daksh0702tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}