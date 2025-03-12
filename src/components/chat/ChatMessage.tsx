'use client';

import styles from '@/app/styles/chatMessage.module.css';

interface ChatMessageProps {
    message: { text: string; sender: string };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
    const isUser = message.sender === 'user';
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.message} ${isUser ? styles.userMessage : styles.assistantMessage}`}>
                <div className={`${styles.messageText} ${isDarkMode ? styles.darkModeText : ''}`}>
                    {message.text}
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
