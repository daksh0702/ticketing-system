import { Publisher, OrderCreatedEvent, Subjects } from "@daksh0702tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated
}