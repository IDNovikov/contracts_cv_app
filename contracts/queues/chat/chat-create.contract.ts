import { EXCHANGE_CHAT } from "../../exchanges/chat.exchange";
import { AmqpBaseRequest } from "../../shared/amqp-base-request.interface";
import { QueueDeclaration } from "../../shared/queue-declaration.interface";

export namespace ChatCreateContract {
  export const queue: QueueDeclaration<unknown> = {
    exchange: EXCHANGE_CHAT,
    queue: `${EXCHANGE_CHAT.name}-chat-create`,
    routingKey: `${EXCHANGE_CHAT.name}-chat-create`,
    queueOptions: {
      durable: true,
      arguments: {
        "x-dead-letter-exchange": "chat.dlx",
        "x-dead-letter-routing-key": "chat.failed",
        "x-message-ttl": 60000,
        //"x-max-length": 100,
        "x-queue-mode": "lazy",
        "x-queue-type": "quorum",
      },
    },
  };
  export interface ChatCreateRequest {
    initiatorUserId: string;
    peerUserId: string | string[];
  }

  export interface ChatCreateResponse {
    id: string;
    type: "DIRECT" | "GROUP";
    title: string;
    avatarUrl: string;
    createdById: number;
    lastMessageId: string;
    lastMessageAt: Date;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
  }
  // export type request = AmqpBaseRequest<SendMailRequest>;
}
