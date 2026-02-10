export interface SendMailRequest {
  from?: string;

  toEmail: string;

  subject: string;

  text: string;

  html?: string;
}
