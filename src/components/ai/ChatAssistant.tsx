"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Send, X, MessageCircle } from 'lucide-react';
import { aiChatAssistant } from '@/ai/flows/ai-chat-assistant-for-guest-queries';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    {role: 'assistant', text: "Hello! I'm your HomelyStay assistant. How can I help you today? You can ask about our rooms, location near CEAT road, or hygiene protocols."}
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setLoading(true);

    try {
      const response = await aiChatAssistant(userMsg);
      setMessages(prev => [...prev, {role: 'assistant', text: response}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'assistant', text: "I'm sorry, I'm having trouble connecting right now. Please try again or WhatsApp us directly!"}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <Button 
          size="lg" 
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 shadow-2xl animate-bounce"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] shadow-2xl flex flex-col border-accent/20">
          <CardHeader className="bg-accent text-white py-4 rounded-t-xl flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Stay Assistant
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden bg-background">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-primary' : 'bg-accent'}`}>
                        {m.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                      </div>
                      <div className={`p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-muted text-primary rounded-tl-none'}`}>
                        {m.text}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-white animate-pulse" />
                      </div>
                      <div className="p-3 rounded-2xl bg-muted text-primary text-sm italic">
                        Typing...
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
            <div className="p-4 border-t bg-white">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <Input 
                  placeholder="Ask a question..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-full"
                />
                <Button 
                  size="icon" 
                  type="submit" 
                  disabled={loading}
                  className="rounded-full bg-accent hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}