import { EXCHANGE_MAIL } from "../../exchanges/mail.exchange";
import { AmqpBaseRequest } from "../../shared/amqp-base-request.interface";
import { QueueDeclaration } from "../../shared/queue-declaration.interface";
import { SendMailRequest } from "./request-type";

export namespace SendMailContract {
  export const queue: QueueDeclaration<unknown> = {
    exchange: EXCHANGE_MAIL,
    queue: `${EXCHANGE_MAIL.name}-send`,
    routingKey: `${EXCHANGE_MAIL.name}-send`,
    queueOptions: { durable: true },
  };
  export type request = AmqpBaseRequest<SendMailRequest>;
}
