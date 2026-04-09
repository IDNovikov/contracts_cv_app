import { RabbitExchangeConfig } from "../shared/rabbit-exchange-config.interface";

export const EXCHANGE_CHAT: RabbitExchangeConfig = {
  name: "chat",
  type: "direct",
};
