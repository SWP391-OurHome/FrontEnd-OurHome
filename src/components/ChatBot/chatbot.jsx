"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: "1",
            text: "Hello! I'm your EstateVue assistant. I can help you with property searches, legal questions, and general real estate inquiries. How can I assist you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [inputMessage, setInputMessage] = useState("")

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return

        const userMessage = {
            id: Date.now().toString(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputMessage("")

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(inputMessage),
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botResponse])
        }, 1000)
    }

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase()

        if (lowerMessage.includes("legal") || lowerMessage.includes("law") || lowerMessage.includes("contract")) {
            return "For legal questions, I recommend consulting with a qualified real estate attorney. However, I can provide general information about common real estate legal topics. What specific legal aspect would you like to know about?"
        }

        if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
            return "Property prices vary based on location, size, condition, and market conditions. I can help you search for properties within your budget range. What's your preferred price range and location?"
        }

        if (lowerMessage.includes("mortgage") || lowerMessage.includes("loan") || lowerMessage.includes("financing")) {
            return "I can provide general information about mortgages and financing options. For specific rates and pre-approval, I recommend speaking with our partner lenders. Would you like me to connect you with a mortgage specialist?"
        }

        return "I understand you're looking for information about real estate. Could you please be more specific about what you'd like to know? I can help with property searches, market information, legal basics, and connecting you with our agents."
    }

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-teal-700 hover:bg-teal-800 shadow-lg z-50"
                size="icon"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">Open chat</span>
            </Button>
        )
    }

    return (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-teal-700 text-white rounded-t-lg">
                <CardTitle className="text-sm font-medium">EstateVue Assistant</CardTitle>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 text-white hover:bg-teal-600"
                >
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent className="p-0 flex flex-col h-80">
                <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`flex items-start space-x-2 max-w-[80%] ${
                                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                                    }`}
                                >
                                    <div
                                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                                            message.sender === "user" ? "bg-teal-700" : "bg-gray-200"
                                        }`}
                                    >
                                        {message.sender === "user" ? (
                                            <User className="h-3 w-3 text-white" />
                                        ) : (
                                            <Bot className="h-3 w-3 text-gray-600" />
                                        )}
                                    </div>
                                    <div
                                        className={`rounded-lg px-3 py-2 text-sm ${
                                            message.sender === "user" ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-900"
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                <div className="p-4 border-t">
                    <div className="flex space-x-2">
                        <Input
                            placeholder="Type your message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            className="flex-1"
                        />
                        <Button onClick={handleSendMessage} size="icon" className="bg-teal-700 hover:bg-teal-800">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
