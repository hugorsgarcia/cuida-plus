// src/components/chat/ChatWindow.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Caregiver } from '../../lib/types';
import { X, Send } from 'lucide-react';

interface ChatWindowProps {
  caregiver: Caregiver;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'caregiver';
}

const ChatWindow: React.FC<ChatWindowProps> = ({ caregiver, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');

    // Simula uma resposta automática do cuidador
    setTimeout(() => {
      setMessages(prev => [...prev, { text: `Olá! Obrigado pela sua mensagem. Responderei o mais breve possível.`, sender: 'caregiver' }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm h-[500px] bg-white rounded-xl shadow-2xl flex flex-col animate-slideUp z-50 border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground rounded-t-xl">
        <div className="flex items-center gap-3">
          <img src={caregiver.photo} alt={caregiver.name} className="w-10 h-10 rounded-full object-cover border-2 border-white" />
          <h3 className="font-bold">{caregiver.name}</h3>
        </div>
        <button onClick={onClose} className="hover:bg-black/10 p-1 rounded-full transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Message List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        <div className="text-center text-xs text-gray-400">
            Você iniciou uma conversa com {caregiver.name}.
        </div>
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'caregiver' && <img src={caregiver.photo} className="w-6 h-6 rounded-full" />}
            <div className={`max-w-[80%] px-3 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-secondary text-secondary-foreground rounded-br-none' : 'bg-muted text-muted-foreground rounded-bl-none'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-3 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            autoFocus
          />
          <button type="submit" className="btn-primary p-3 flex-shrink-0">
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;