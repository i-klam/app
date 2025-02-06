CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    token VARCHAR(255) UNIQUE NOT NULL,
    phone BIGINT UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    dob DATE NOT NULL
);

CREATE TABLE adds (
    add_id SERIAL PRIMARY KEY,
    add_name VARCHAR(255) NOT NULL,
    add_disc TEXT,
    add_cat VARCHAR(100),
    add_img TEXT,
    add_owner VARCHAR(255) NOT NULL,
    add_prise NUMERIC(10,2) NOT NULL,
    add_location VARCHAR(255),
    add_createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    add_count INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT fk_add_owner
        FOREIGN KEY (add_owner)
        REFERENCES users(token)
);

CREATE TABLE adds_comments (
    add_comment_id SERIAL PRIMARY KEY,
    add_id INTEGER NOT NULL,
    add_comment_user VARCHAR(255) NOT NULL,
    add_comment TEXT,
    CONSTRAINT fk_comment_user
        FOREIGN KEY (add_comment_user)
        REFERENCES users(token),
    CONSTRAINT fk_comment_add
        FOREIGN KEY (add_id)
        REFERENCES adds(add_id)
);

CREATE TABLE adds_rate (
    add_rate_id SERIAL PRIMARY KEY,
    add_rate_postId INTEGER NOT NULL,
    add_rates JSONB,
    CONSTRAINT fk_rate_post
        FOREIGN KEY (add_rate_postId)
        REFERENCES adds(add_id)
);


CREATE TABLE chats (
    chat_id SERIAL PRIMARY KEY,
    user1_token VARCHAR(255) NOT NULL,
    user2_token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_chat_user1
        FOREIGN KEY (user1_token)
        REFERENCES users(token),
    CONSTRAINT fk_chat_user2
        FOREIGN KEY (user2_token)
        REFERENCES users(token)
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    chat_id INTEGER NOT NULL,
    sender_token VARCHAR(255) NOT NULL,
    message_text TEXT,
    message_img TEXT,
    sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_message_chat
        FOREIGN KEY (chat_id)
        REFERENCES chats(chat_id),
    CONSTRAINT fk_message_sender
        FOREIGN KEY (sender_token)
        REFERENCES users(token)
);
