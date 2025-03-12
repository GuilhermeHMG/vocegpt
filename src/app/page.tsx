'use client';

import { useState, useEffect } from 'react';
import ChatInput from '@/components/chat/ChatInput';
import ChatMessage from '@/components/chat/ChatMessage';
import styles from './styles/chat.module.css';

const Page = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);

  useEffect(() => {
    setMessages([
      { 
        text: `Olá! Eu sou o assistente virtual do Guilherme. O que gostaria de saber sobre ele? Você pode fazer perguntas como:`, 
        sender: 'assistant' 
      },
      { 
        text: `"Quem é o Guilherme?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Quantos anos o Guilherme tem?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Quais são as skills do Guilherme?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Qual é o github do Guilherme?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Onde ele mora?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Conte-me sobre a vida profissional do Guilherme"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Conta-me sobre a vida pessoal do Guilherme"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Por que querer trabalhar na Embracon?"`, 
        sender: 'assistant' 
      },
      { 
        text: `"Há! Caso queira ver novamente como as perguntas devem ser feitas, é só enviar 'mostre-me as perguntas' ;) ... Fique a vontade!"`, 
        sender: 'assistant' 
      },
    ]);
  }, []);

  const handleSendMessage = async (text: string) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender: 'user' }]);

    try {
      const response = await fetch('/api/chat', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      let assistantMessage = data.answer; 

      if (!assistantMessage) {
        assistantMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      }

      if (!assistantMessage) {
        assistantMessage = "Desculpe, não consegui encontrar uma resposta para isso.";
      }

      setMessages((prevMessages) => [...prevMessages, { text: assistantMessage, sender: 'assistant' }]);

    } catch (error) {
      console.error("Erro ao buscar resposta da API:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Ocorreu um erro ao processar sua mensagem.", sender: 'assistant' }]);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Page;
