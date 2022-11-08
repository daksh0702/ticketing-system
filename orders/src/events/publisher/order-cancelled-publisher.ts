import { Publisher, OrderCancelledEvent, Subjects } from "@daksh0702tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}