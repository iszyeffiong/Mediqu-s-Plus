import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, MapPin, Clock, Ambulance, ShieldAlert } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! Welcome to Mediqués Plus Support. How can we assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState<'initial' | 'emergency-type' | 'location' | 'phone' | 'final'>('initial');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionData, setSessionData] = useState<{location?: string, phone?: string}>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    setMessages(prev => [...prev, { text, sender, timestamp: new Date() }]);
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    
    if (option === 'Emergency / Ambulance') {
      setTimeout(() => {
        addMessage("EMERGENCY SELECTED. We are ready to dispatch. Please provide your Street Address and a Major Landmark for faster help.", 'bot');
        setStep('location');
      }, 500);
    } else if (option === 'General Inquiry') {
      setTimeout(() => {
        addMessage("Sure! Please leave your question and our team will get back to you shortly, or call us directly at 0806 852 3555.", 'bot');
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    addMessage(userText, 'user');
    setInputValue('');

    if (step === 'location') {
      setSessionData(prev => ({ ...prev, location: userText }));
      setTimeout(() => {
        addMessage(`Location received: ${userText}. Now, please provide your Phone Number so our emergency team can coordinate with you instantly.`, 'bot');
        setStep('phone');
      }, 800);
    } else if (step === 'phone') {
      setSessionData(prev => ({ ...prev, phone: userText }));
      setTimeout(() => {
        addMessage(`Thank you. Dispatch team is moving to ${sessionData.location}.`, 'bot');
        setTimeout(() => {
          addMessage("Estimated arrival time: 10-15 minutes. Please stay calm and keep this line open. Help is on the way.", 'bot');
          setStep('final');
        }, 1000);
      }, 800);
    } else {
      setTimeout(() => {
        addMessage("I've received your message. A representative will be with you shortly.", 'bot');
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <ShieldAlert size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm tracking-tight text-white m-0">Mediqués Support</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Always Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                  msg.sender === 'bot' 
                    ? "bg-white border border-border text-foreground self-start rounded-tl-none shadow-sm" 
                    : "bg-primary text-white self-end rounded-tr-none ml-auto shadow-md"
                )}
              >
                {msg.text}
              </div>
            ))}
            
            {/* Contextual Options */}
            {step === 'initial' && messages.length === 1 && (
              <div className="flex flex-col gap-2 pt-2">
                <button 
                  onClick={() => handleOptionClick('Emergency / Ambulance')}
                  className="bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/20 px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Ambulance size={14} /> Request Ambulance
                </button>
                <button 
                  onClick={() => handleOptionClick('General Inquiry')}
                  className="bg-secondary hover:bg-primary/5 text-foreground border border-border px-4 py-2 rounded-xl text-xs font-bold transition-all"
                >
                   General Inquiry
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-border flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                step === 'location' ? "Street address, major landmark..." : 
                step === 'phone' ? "Enter your phone number..." : 
                "Type a message..."
              }
              className="flex-1 bg-secondary rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button 
              type="submit"
              className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95",
          isOpen ? "bg-white text-primary rotate-90" : "bg-primary text-white"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default FloatingChatbot;
