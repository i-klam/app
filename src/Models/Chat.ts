export interface IChat {
    chat_id: number;
    user1_token: string;
    user2_token: string;
    created_at: Date;
  }
  
  export interface IMessage {
    message_id: number;
    chat_id: number;
    sender_token: string;
    message_text: string;
    message_img?: string; // Optional image field
    sent_at: Date;
  }
  