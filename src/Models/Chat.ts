// 'chats' table.
export interface IChat {
    chat_id: number;
    user1_token: string;
    user2_token: string;
    created_at: Date;
  }
  
  // 'messages' table.
  export interface IMessage {
    message_id: number;
    chat_id: number;
    sender_token: string;
    message_text: string;
    message_img?: string; // Optional image URL
    sent_at: Date;
  }
  