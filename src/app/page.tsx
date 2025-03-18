"use client";

import { useState, useEffect, useRef } from "react";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import styles from "./styles/chat.module.css";

const Page = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      { text: `Olá! Eu sou o assistente virtual do Guilherme. O que gostaria de saber sobre ele? Você pode fazer perguntas como:`, sender: "assistant" },
      { text: `"Quem é o Guilherme?"`, sender: "assistant" },
      { text: `"Quantos anos o Guilherme tem?"`, sender: "assistant" },
      { text: `"Quais são as skills do Guilherme?"`, sender: "assistant" },
      { text: `"Qual é o github do Guilherme?"`, sender: "assistant" },
      { text: `"Onde ele mora?"`, sender: "assistant" },
      { text: `"Conte-me sobre a vida profissional do Guilherme"`, sender: "assistant" },
      { text: `"Conte-me sobre a vida pessoal do Guilherme"`, sender: "assistant" },
      { text: `"Por que querer trabalhar na Embracon?"`, sender: "assistant" },
      { text: `"Há! Caso queira ver novamente as perguntas, envie 'mostre-me as perguntas' ;) Fique à vontade!"`, sender: "assistant" },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender: "user" }]);
  
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
      }
  
      const textResponse = await response.text();
      console.log("Raw response text:", textResponse);
  
      const data = JSON.parse(textResponse); // Convertendo manualmente para evitar erro no response.json()
      console.log("Parsed JSON:", data);
  
      let assistantMessage = data.answer || data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  
      if (!assistantMessage) {
        assistantMessage = "Desculpe, não consegui encontrar uma resposta para isso.";
      }
  
      setMessages((prevMessages) => [...prevMessages, { text: assistantMessage, sender: "assistant" }]);
    } catch (error) {
      console.error("Erro ao buscar resposta da API:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Ocorreu um erro ao processar sua mensagem.", sender: "assistant" }]);
    }
  };  

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Page;
