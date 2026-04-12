export interface AmqpBaseResponse<T = unknown> {
  requestId: string;
  payload?: T;
  error?: {
    code: string;
    message: string;
  };
  timeStamp: string;
}
