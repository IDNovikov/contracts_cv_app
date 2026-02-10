import { RabbitExchangeConfig } from "./rabbit-exchange-config.interface";

interface QueueOptions<ConsumeOptions> {
  durable?: boolean;
  exclusive?: boolean;
  autoDelete?: boolean;
  arguments?: any;
  messageTtl?: number;
  expires?: number;
  deadLetterExchange?: string;
  deadLetterRoutingKey?: string;
  maxLength?: number;
  maxPriority?: number;
  bindQueueArguments?: any;
  /**
   * Set this to the name of the channel you want to consume messages from to enable this feature.
   *
   * If channel does not exist or you haven't specified one, it will use the default channel.
   *
   * For channel to exist it needs to be created in module config.
   */
  channel?: string;
  consumerOptions?: ConsumeOptions;
}

export interface QueueDeclaration<ConsumeOptions> {
  exchange: RabbitExchangeConfig;
  routingKey: string;
  queue: string;
  queueOptions: QueueOptions<ConsumeOptions>;
}
