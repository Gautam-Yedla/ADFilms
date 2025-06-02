
// import React, { useState, useEffect, useRef, FormEvent } from 'react';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// // import { GoogleGenerativeAI } from "@google/generative-ai";

// // Icons
// const ChatIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091A9.75 9.75 0 0112 15.75H8.25m0 0H5.625c-.621 0-1.125-.504-1.125-1.125V9.61c0-.97.616-1.813 1.5-2.097m0 0A9.75 9.75 0 0112 7.5h4.5m0 0c.884.284 1.5 1.128 1.5 2.097M8.25 8.511A9.75 9.75 0 0012 7.5c1.038 0 2.02.156 2.922.432m0 0L12 7.5M8.25 8.511l-2.922.432m0 0L12 7.5m0 0l-.224.03-.002.001-.002.001-.224.03C11.7 7.501 11.355 7.5 11 7.5c-1.038 0-2.02.156-2.922.432m4.844 2.097a.75.75 0 00-1.06 0L12 11.56l-1.954-1.03a.75.75 0 10-.99 1.126l2.5 1.316a.75.75 0 00.99 0l2.5-1.316a.75.75 0 00.06-1.126z" />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//   </svg>
// );

// const SendIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
//     </svg>
// );


// /**
//  * @typedef {Object} Message
//  * @property {string} id
//  * @property {string} text
//  * @property {'user' | 'ai'} sender
//  * @property {boolean} [streaming]
//  * @property {boolean} [error]
//  */

// const Chatbot = ({ theme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [chat, setChat] = useState<Chat | null>(null);
//   const [ai, setAi] = useState<GoogleGenerativeAI | null>(null);

//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     // Use import.meta.env.VITE_API_KEY for Vite, or process.env.REACT_APP_API_KEY for CRA
//     const apiKey = import.meta.env?.VITE_API_KEY;
//     if (apiKey) {
//       try {
//         const genAI = new GoogleGenerativeAI({ apiKey });
//         setAi(genAI);
//       } catch (e) {
//         console.error("Failed to initialize GoogleGenerativeAI:", e);
//         setError("Chatbot initialization failed. API Key might be missing or invalid.");
//       }
//     } else {
//       setError("Chatbot is unavailable: API Key not configured.");
//     }
//   }, []);
  
//   useEffect(() => {
//     if (ai && !chat && isOpen) {
//       const newChat = ai.chats.create({
//         model: 'gemini-2.5-flash-preview-04-17',
//         config: {
//           systemInstruction: "You are AD FILMS Assistant, a friendly and knowledgeable AI chatbot. Your purpose is to help users learn about AD FILMS, their services (YouTube content creation, wedding films, ad commercials), and answer general inquiries. Keep your responses helpful, concise, and professional. If you don't know an answer, politely say so. Avoid making up information not related to AD FILMS. You can ask clarifying questions if a user's query is ambiguous.",
//         },
//       });
//       setChat(newChat);
//       if (messages.length === 0) {
//         setMessages([{ id: 'initial-greeting', text: "Hello! I'm the AD FILMS Assistant. How can I help you today?", sender: 'ai' }]);
//       }
//     }
//   }, [ai, chat, isOpen, messages.length, setChat]);

//   useEffect(() => {
//     if (isOpen) {
//       inputRef.current?.focus();
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen && messages.length === 0 && chat) { // First open after chat initialized
//         setMessages([{ id: 'initial-greeting', text: "Hello! I'm the AD FILMS Assistant. How can I help you today?", sender: 'ai' }]);
//     }
//     setError(null); // Clear previous errors when toggling
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = async (e) => {
//     if (e) e.preventDefault();
//     const trimmedInput = inputValue.trim();
//     if (!trimmedInput || isLoading || !chat) return;

//     const newUserMessage = { id: Date.now().toString(), text: trimmedInput, sender: 'user' };
//     setMessages(prev => [...prev, newUserMessage]);
//     setInputValue('');
//     setIsLoading(true);
//     setError(null);

//     const aiMessageId = (Date.now() + 1).toString();
//     // Add a placeholder for streaming AI message
//     setMessages(prev => [...prev, { id: aiMessageId, text: '', sender: 'ai', streaming: true }]);

//     try {
//       const stream = await chat.sendMessageStream({ message: trimmedInput });
//       let currentText = '';
//       for await (const chunk of stream) { // chunk is GenerateContentResponse
//         currentText += chunk.text;
//         setMessages(prev => prev.map(msg => 
//             msg.id === aiMessageId ? { ...msg, text: currentText, streaming: true } : msg
//         ));
//       }
//       setMessages(prev => prev.map(msg => 
//           msg.id === aiMessageId ? { ...msg, text: currentText, streaming: false } : msg
//       ));
//     } catch (err) {
//       console.error("Error sending message:", err);
//       const errorMessage = "Sorry, I encountered an issue. Please try again.";
//       setMessages(prev => prev.map(msg => 
//         msg.id === aiMessageId ? { ...msg, text: errorMessage, streaming: false, error: true } : msg
//       ));
//       setError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   const apiKey = import.meta.env?.VITE_API_KEY;
//   if (!apiKey) {
//       // Potentially render a disabled FAB or nothing if API key is not set
//       // For now, we'll just not render the chatbot if key is missing.
//       // A console log is in the useEffect.
//       return null; 
//   }
//       return null; 
//   }


//   return (
//     <>
//       {/* FAB */}
//       <button
//         onClick={toggleChat}
//         aria-label={isOpen ? "Close chat" : "Open chat"}
//         title={isOpen ? "Close chat" : "Open chat"}
//         className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-110
//                     ${theme === 'light' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-600 text-white hover:bg-amber-500'}
//                     focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400'}`}
//       >
//         {isOpen ? <CloseIcon /> : <ChatIcon />}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div 
//           className={`fixed bottom-20 right-6 z-40 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[500px] flex flex-col
//                       shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out
//                       ${theme === 'light' ? 'bg-white border border-slate-200' : 'bg-neutral-800 border border-neutral-700'}
//                       ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="chatbot-title"
//         >
//           {/* Header */}
//           <header 
//             className={`p-4 flex justify-between items-center border-b
//                         ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-700 border-neutral-600'}`}
//           >
//             <h2 id="chatbot-title" className={`text-lg font-semibold ${theme === 'light' ? 'text-slate-700' : 'text-neutral-100'}`}>
//               AD FILMS Assistant
//             </h2>
//             <button 
//               onClick={toggleChat} 
//               aria-label="Close chat window"
//               className={`p-1 rounded-full ${theme === 'light' ? 'text-slate-500 hover:bg-slate-200' : 'text-neutral-400 hover:bg-neutral-600'} focus:outline-none focus:ring-1 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400' }`}
//             >
//               <CloseIcon />
//             </button>
//           </header>

//           {/* Messages Area */}
//           <div className="flex-grow p-4 space-y-3 overflow-y-auto scrolling-touch">
//             {messages.map((msg) => (
//               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div 
//                   className={`max-w-[80%] p-2.5 rounded-lg shadow
//                               ${msg.sender === 'user' 
//                                 ? (theme === 'light' ? 'bg-amber-500 text-white' : 'bg-amber-600 text-white') 
//                                 : (theme === 'light' ? 'bg-slate-100 text-slate-700' : 'bg-neutral-700 text-neutral-100')}
//                               ${msg.error ? (theme === 'light' ? '!bg-red-100 !text-red-700' : '!bg-red-900 !text-red-200') : ''}
//                             `}
//                 >
//                   <p className="text-sm whitespace-pre-wrap">{msg.text}{(msg.sender === 'ai' && msg.streaming && !msg.error) ? '...' : ''}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && messages[messages.length-1]?.sender !== 'ai' && ( // Show typing indicator if last message isn't already streaming AI
//                  <div className="flex justify-start">
//                     <div className={`max-w-[80%] p-2.5 rounded-lg shadow ${theme === 'light' ? 'bg-slate-100 text-slate-700' : 'bg-neutral-700 text-neutral-100'}`}>
//                         <p className="text-sm">Assistant is typing...</p>
//                     </div>
//                 </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Error Display Area */}
//           {error && !messages.some(m => m.error) && ( // Display general error if no message specific error shown
//              <div className={`p-3 border-t ${theme === 'light' ? 'border-slate-200 bg-red-50' : 'border-neutral-600 bg-red-900/30'}`}>
//                 <p className={`text-xs ${theme === 'light' ? 'text-red-600' : 'text-red-300'}`}>{error}</p>
//              </div>
//           )}


//           {/* Input Area */}
//           <form 
//             onSubmit={handleSendMessage} 
//             className={`p-3 border-t flex items-center space-x-2 
//                         ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-700 border-neutral-600'}`}
//           >
//             <input
//               ref={inputRef}
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
//               disabled={isLoading || !chat}
//               aria-label="Chat message input"
//               className={`flex-grow p-2.5 border rounded-md text-sm
//                           ${theme === 'light' 
//                             ? 'bg-white border-slate-300 focus:ring-amber-500 focus:border-amber-500 text-slate-700 placeholder-slate-400' 
//                             : 'bg-neutral-600 border-neutral-500 focus:ring-amber-500 focus:border-amber-500 text-neutral-100 placeholder-neutral-400'}
//                           disabled:opacity-60`}
//             />
//             <button 
//               type="submit" 
//               disabled={isLoading || !inputValue.trim() || !chat}
//               aria-label="Send message"
//               className={`p-2.5 rounded-md transition-colors duration-200
//                           ${isLoading || !inputValue.trim() || !chat
//                             ? (theme === 'light' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-neutral-500 text-neutral-400 cursor-not-allowed')
//                             : (theme === 'light' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-600 text-white hover:bg-amber-500')
//                           }
//                           focus:outline-none focus:ring-2 focus:ring-offset-1 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400' }`}
//             >
//               <SendIcon/>
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chatbot;










// // import React, { useState, useEffect, useRef } from 'react';
// // // import { GoogleGenerativeAI } from '@google/genai';
// // import { GoogleGenerativeAI } from "@google/generative-ai";


// // // Icons
// // const ChatIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.68-3.091A9.75 9.75 0 0112 15.75H8.25m0 0H5.625c-.621 0-1.125-.504-1.125-1.125V9.61c0-.97.616-1.813 1.5-2.097m0 0A9.75 9.75 0 0112 7.5h4.5m0 0c.884.284 1.5 1.128 1.5 2.097M8.25 8.511A9.75 9.75 0 0012 7.5c1.038 0 2.02.156 2.922.432m0 0L12 7.5M8.25 8.511l-2.922.432m0 0L12 7.5m0 0l-.224.03-.002.001-.002.001-.224.03C11.7 7.501 11.355 7.5 11 7.5c-1.038 0-2.02.156-2.922.432m4.844 2.097a.75.75 0 00-1.06 0L12 11.56l-1.954-1.03a.75.75 0 10-.99 1.126l2.5 1.316a.75.75 0 00.99 0l2.5-1.316a.75.75 0 00.06-1.126z" />
// //   </svg>
// // );

// // const CloseIcon = () => (
// //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// //     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
// //   </svg>
// // );

// // const SendIcon = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
// //         <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
// //     </svg>
// // );

// // const Chatbot = ({ theme }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState([]);
// //   const [inputValue, setInputValue] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [chat, setChat] = useState(null);
// //   const [ai, setAi] = useState(null);

// //   const messagesEndRef = useRef(null);
// //   const inputRef = useRef(null);

// //   useEffect(() => {
// //     // Use import.meta.env for Vite or process.env.REACT_APP_API_KEY for CRA
// //     const apiKey = import.meta.env.VITE_API_KEY;
// //     if (apiKey) {
// //       try {
// //         const genAI = new GoogleGenerativeAI({ apiKey });
// //         setAi(genAI);
// //       } catch (e) {
// //         console.error("Failed to initialize GoogleGenerativeAI:", e);
// //         setError("Chatbot initialization failed. API Key might be missing or invalid.");
// //       }
// //     } else {
// //       setError("Chatbot is unavailable: API Key not configured.");
// //       console.warn("Chatbot: VITE_API_KEY environment variable is not set. Chatbot will be disabled.");
// //     }
// //   }, []);
  
// //   useEffect(() => {
// //     if (ai && !chat && isOpen) {
// //       const newChat = ai.chats.create({
// //         model: 'gemini-2.5-flash-preview-04-17',
// //         config: {
// //           systemInstruction: "You are AD FILMS Assistant, a friendly and knowledgeable AI chatbot. Your purpose is to help users learn about AD FILMS, their services (YouTube content creation, wedding films, ad commercials), and answer general inquiries. Keep your responses helpful, concise, and professional. If you don't know an answer, politely say so. Avoid making up information not related to AD FILMS. You can ask clarifying questions if a user's query is ambiguous.",
// //         },
// //       });
// //       setChat(newChat);
// //       if (messages.length === 0) {
// //         setMessages([{ id: 'initial-greeting', text: "Hello! I'm the AD FILMS Assistant. How can I help you today?", sender: 'ai' }]);
// //       }
// //     }
// //   }, [ai, chat, isOpen, messages.length]);

// //   useEffect(() => {
// //     if (isOpen) {
// //       inputRef.current?.focus();
// //     }
// //   }, [isOpen]);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   }, [messages]);

// //   const toggleChat = () => {
// //     setIsOpen(!isOpen);
// //     if (!isOpen && messages.length === 0 && chat) { // First open after chat initialized
// //         setMessages([{ id: 'initial-greeting', text: "Hello! I'm the AD FILMS Assistant. How can I help you today?", sender: 'ai' }]);
// //     }
// //     setError(null); // Clear previous errors when toggling
// //   };

// //   const handleInputChange = (e) => {
// //     setInputValue(e.target.value);
// //   };

// //   const handleSendMessage = async (e) => {
// //     if (e) e.preventDefault();
// //     const trimmedInput = inputValue.trim();
// //     if (!trimmedInput || isLoading || !chat) return;

// //     const newUserMessage = { id: Date.now().toString(), text: trimmedInput, sender: 'user' };
// //     setMessages(prev => [...prev, newUserMessage]);
// //     setInputValue('');
// //     setIsLoading(true);
// //     setError(null);

// //     const aiMessageId = (Date.now() + 1).toString();
// //     // Add a placeholder for streaming AI message
// //     setMessages(prev => [...prev, { id: aiMessageId, text: '', sender: 'ai', streaming: true }]);

// //     try {
// //       const stream = await chat.sendMessageStream({ message: trimmedInput });
// //       let currentText = '';
// //       for await (const chunk of stream) { // chunk is a GenerateContentResponse
// //         currentText += chunk.text;
// //         setMessages(prev => prev.map(msg => 
// //             msg.id === aiMessageId ? { ...msg, text: currentText, streaming: true } : msg
// //         ));
// //       }
// //       setMessages(prev => prev.map(msg => 
// //           msg.id === aiMessageId ? { ...msg, text: currentText, streaming: false } : msg
// //       ));
// //     } catch (err) {
// //       console.error("Error sending message:", err);
// //       const errorMessageText = "Sorry, I encountered an issue. Please try again.";
// //       setMessages(prev => prev.map(msg => 
// //         msg.id === aiMessageId ? { ...msg, text: errorMessageText, streaming: false, error: true } : msg
// //       ));
// //       setError(errorMessageText);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   // Use import.meta.env for Vite
// //   const apiKey = import.meta.env.VITE_API_KEY;
// //   if (!apiKey) {
// //       return null; 
// //   }
// //       return null; 
// //   }

// //   return (
// //     <>
// //       {/* FAB */}
// //       <button
// //         onClick={toggleChat}
// //         aria-label={isOpen ? "Close chat" : "Open chat"}
// //         title={isOpen ? "Close chat" : "Open chat"}
// //         className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-110
// //                     ${theme === 'light' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-600 text-white hover:bg-amber-500'}
// //                     focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400'}`}
// //       >
// //         {isOpen ? <CloseIcon /> : <ChatIcon />}
// //       </button>

// //       {/* Chat Window */}
// //       {isOpen && (
// //         <div 
// //           className={`fixed bottom-20 right-6 z-40 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[500px] flex flex-col
// //                       shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out
// //                       ${theme === 'light' ? 'bg-white border border-slate-200' : 'bg-neutral-800 border border-neutral-700'}
// //                       ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
// //           role="dialog"
// //           aria-modal="true"
// //           aria-labelledby="chatbot-title"
// //         >
// //           {/* Header */}
// //           <header 
// //             className={`p-4 flex justify-between items-center border-b
// //                         ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-700 border-neutral-600'}`}
// //           >
// //             <h2 id="chatbot-title" className={`text-lg font-semibold ${theme === 'light' ? 'text-slate-700' : 'text-neutral-100'}`}>
// //               AD FILMS Assistant
// //             </h2>
// //             <button 
// //               onClick={toggleChat} 
// //               aria-label="Close chat window"
// //               className={`p-1 rounded-full ${theme === 'light' ? 'text-slate-500 hover:bg-slate-200' : 'text-neutral-400 hover:bg-neutral-600'} focus:outline-none focus:ring-1 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400' }`}
// //             >
// //               <CloseIcon />
// //             </button>
// //           </header>

// //           {/* Messages Area */}
// //           <div className="flex-grow p-4 space-y-3 overflow-y-auto scrolling-touch">
// //             {messages.map((msg) => (
// //               <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
// //                 <div 
// //                   className={`max-w-[80%] p-2.5 rounded-lg shadow
// //                               ${msg.sender === 'user' 
// //                                 ? (theme === 'light' ? 'bg-amber-500 text-white' : 'bg-amber-600 text-white') 
// //                                 : (theme === 'light' ? 'bg-slate-100 text-slate-700' : 'bg-neutral-700 text-neutral-100')}
// //                               ${msg.error ? (theme === 'light' ? '!bg-red-100 !text-red-700' : '!bg-red-900 !text-red-200') : ''}
// //                             `}
// //                 >
// //                   <p className="text-sm whitespace-pre-wrap">{msg.text}{(msg.sender === 'ai' && msg.streaming && !msg.error) ? '...' : ''}</p>
// //                 </div>
// //               </div>
// //             ))}
// //             {isLoading && messages.length > 0 && messages[messages.length-1]?.sender !== 'ai' && ( // Show typing indicator if last message isn't already streaming AI
// //                  <div className="flex justify-start">
// //                     <div className={`max-w-[80%] p-2.5 rounded-lg shadow ${theme === 'light' ? 'bg-slate-100 text-slate-700' : 'bg-neutral-700 text-neutral-100'}`}>
// //                         <p className="text-sm">Assistant is typing...</p>
// //                     </div>
// //                 </div>
// //             )}
// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Error Display Area */}
// //           {error && !messages.some(m => m.error) && ( // Display general error if no message specific error shown
// //              <div className={`p-3 border-t ${theme === 'light' ? 'border-slate-200 bg-red-50' : 'border-neutral-600 bg-red-900/30'}`}>
// //                 <p className={`text-xs ${theme === 'light' ? 'text-red-600' : 'text-red-300'}`}>{error}</p>
// //              </div>
// //           )}


// //           {/* Input Area */}
// //           <form 
// //             onSubmit={handleSendMessage} 
// //             className={`p-3 border-t flex items-center space-x-2 
// //                         ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-neutral-700 border-neutral-600'}`}
// //           >
// //             <input
// //               ref={inputRef}
// //               type="text"
// //               value={inputValue}
// //               onChange={handleInputChange}
// //               placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
// //               disabled={isLoading || !chat}
// //               aria-label="Chat message input"
// //               className={`flex-grow p-2.5 border rounded-md text-sm
// //                           ${theme === 'light' 
// //                             ? 'bg-white border-slate-300 focus:ring-amber-500 focus:border-amber-500 text-slate-700 placeholder-slate-400' 
// //                             : 'bg-neutral-600 border-neutral-500 focus:ring-amber-500 focus:border-amber-500 text-neutral-100 placeholder-neutral-400'}
// //                           disabled:opacity-60`}
// //             />
// //             <button 
// //               type="submit" 
// //               disabled={isLoading || !inputValue.trim() || !chat}
// //               aria-label="Send message"
// //               className={`p-2.5 rounded-md transition-colors duration-200
// //                           ${isLoading || !inputValue.trim() || !chat
// //                             ? (theme === 'light' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-neutral-500 text-neutral-400 cursor-not-allowed')
// //                             : (theme === 'light' ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-amber-600 text-white hover:bg-amber-500')
// //                           }
// //                           focus:outline-none focus:ring-2 focus:ring-offset-1 ${theme === 'light' ? 'focus:ring-amber-500' : 'focus:ring-amber-400' }`}
// //             >
// //               <SendIcon/>
// //             </button>
// //           </form>
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default Chatbot;
