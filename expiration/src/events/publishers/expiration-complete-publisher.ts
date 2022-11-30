import { Publisher, ExpirationCompleteEvent, Subjects } from "@daksh0702tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}