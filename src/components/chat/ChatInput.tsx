'use client';

import { useState } from 'react';
import styles from '@/app/styles/chat.module.css';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        aria-label="Digite sua mensagem"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className={styles.inputField}
        placeholder="Digite sua mensagem..."
      />
      <button type="submit" className={styles.sendButton}>Enviar</button>
    </form>
  );
};

export default ChatInput;
