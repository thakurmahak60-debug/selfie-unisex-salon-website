import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bot, X, Send, RotateCcw, Calendar, User, MessageSquare, ChevronDown } from 'lucide-react';

interface AiChatbotProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const SUGGESTED_QUESTIONS = [
  "💇 What are your hair botox & keratin prices?",
  "👑 Tell me about your HD Bridal Packages",
  "📍 Where are you located in TI Mall?",
  "✨ Are there any active discounts or offers?",
  "💅 Do you offer gel nail extensions?"
];

export default function AiChatbot({ onOpenBooking }: AiChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content: "Namaste! I'm **Aura**, your AI Beauty Concierge at **Selfie Unisex Salon**, Treasure Island Mall Indore.\n\nHow can I help you today? Ask me about our hair botox, skin facials, royal bridal packages, or operating hours!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!messageText) setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare message history for context
      const historyPayload = messages
        .filter((m) => m.id !== 'welcome-1')
        .map((m) => ({
          role: m.role,
          content: m.content
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      const data = await response.json();

      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I'd be glad to assist you at Selfie Salon TI Mall. How else can I help?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: "I apologize, I experienced a momentary network issue. Please call our salon concierge at **+91 98260 12345** or tap **Book Appointment** to reserve your visit at TI Mall Indore!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'assistant',
        content: "Chat cleared! I'm ready for your questions about Selfie Unisex Salon, TI Mall Indore.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  // Basic formatting helper for bolding and bullet points
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return (
      <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
        {lines.map((line, idx) => {
          if (!line.trim()) return <div key={idx} className="h-1" />;
          
          // Replace bold markdown **text**
          const parts = line.split(/(\*\*.*?\*\*)/g);
          const formattedLine = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold text-[#71383F]">{part.slice(2, -2)}</strong>;
            }
            return part;
          });

          if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
            return (
              <div key={idx} className="flex items-start gap-1.5 pl-1">
                <span className="text-[#C28289] font-bold">•</span>
                <span>{formattedLine}</span>
              </div>
            );
          }

          return <p key={idx}>{formattedLine}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left on Desktop, Bottom Left on Mobile) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-4 py-3 rounded-full bg-gradient-to-r from-[#71383F] via-[#8E4B54] to-[#71383F] text-white shadow-2xl border border-[#E8C5C8]/40 flex items-center gap-2.5 cursor-pointer group"
          aria-label="Open AI Beauty Concierge Chat"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#E8C5C8] animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#71383F]" />
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase pr-1">Ask Aura AI</span>
        </motion.button>
      </div>

      {/* Floating Mobile Trigger (Bottom Left on Mobile) */}
      <div className="fixed bottom-20 left-4 z-40 sm:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-[#71383F] text-white shadow-2xl border border-[#E8C5C8]/40 flex items-center justify-center cursor-pointer"
          aria-label="Open AI Chatbot"
        >
          <Sparkles className="w-5 h-5 text-[#E8C5C8]" />
        </motion.button>
      </div>

      {/* Slide-over Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:w-[410px] h-[550px] max-h-[85vh] bg-[#FCF9F6] border border-[#F3DCDE] rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#71383F] to-[#5A2D35] text-white flex items-center justify-between border-b border-[#E8C5C8]/20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-[#E8C5C8]" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#71383F]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-serif-section text-lg font-normal text-white">Aura AI</h3>
                    <span className="px-2 py-0.5 rounded-full bg-white/15 text-[9px] font-semibold tracking-widest text-[#E8C5C8] uppercase">
                      Concierge
                    </span>
                  </div>
                  <p className="text-[10px] text-[#F9EFEF]/80">Selfie Salon • TI Mall Indore</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClearChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Action Bar Header Shortcut */}
            <div className="bg-[#FFF9F9] px-4 py-2 border-b border-[#F3DCDE] flex items-center justify-between text-xs text-[#71383F] shrink-0">
              <span className="font-medium text-[11px] text-[#8C7A78]">Need an appointment slot?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="px-3 py-1 rounded-full bg-[#71383F] text-white text-[10px] font-semibold uppercase tracking-wider hover:bg-[#8E4B54] transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Calendar className="w-3 h-3 text-[#E8C5C8]" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      msg.role === 'user'
                        ? 'bg-[#8E4B54] text-white'
                        : 'bg-[#F9EFEF] text-[#71383F] border border-[#F3DCDE]'
                    }`}
                  >
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5 text-[#C28289]" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl space-y-1 shadow-xs ${
                      msg.role === 'user'
                        ? 'bg-[#71383F] text-white rounded-tr-none'
                        : 'bg-[#FFF9F9] text-[#4A3E3D] border border-[#F3DCDE] rounded-tl-none'
                    }`}
                  >
                    {renderFormattedContent(msg.content)}
                    <span
                      className={`block text-[9px] text-right mt-1 ${
                        msg.role === 'user' ? 'text-white/70' : 'text-[#8C7A78]'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-[#71383F]">
                  <div className="w-7 h-7 rounded-full bg-[#F9EFEF] border border-[#F3DCDE] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#C28289] animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] flex items-center gap-1.5 text-xs text-[#6A5A58]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C28289] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C28289] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C28289] animate-bounce [animation-delay:0.4s]" />
                    <span className="ml-1 text-[11px]">Aura is thinking...</span>
                  </div>
                </div>
              )}

              {/* Suggested Questions (Show if message history is brief) */}
              {messages.length <= 2 && !isLoading && (
                <div className="pt-2 space-y-2">
                  <p className="text-[11px] font-semibold text-[#8C7A78] uppercase tracking-wider">
                    Frequently Asked Questions:
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(q)}
                        className="p-2.5 rounded-xl bg-[#FFF9F9] hover:bg-[#F9EFEF] border border-[#F3DCDE] text-left text-xs text-[#71383F] font-medium transition-colors cursor-pointer flex items-center justify-between group"
                      >
                        <span>{q}</span>
                        <Send className="w-3 h-3 text-[#C28289] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="p-3 bg-[#FCF9F6] border-t border-[#F3DCDE] shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask Aura about treatments, rates..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border border-[#F3DCDE] text-xs text-[#4A3E3D] placeholder-[#A0908E] focus:outline-none focus:border-[#71383F] transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2.5 rounded-full bg-[#71383F] text-white hover:bg-[#8E4B54] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  <Send className="w-4 h-4 text-[#E8C5C8]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
