import { Subjects,Publisher,PaymentCreatedEvent } from "@daksh0702tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject:Subjects.PaymentCreated = Subjects.PaymentCreated
}
