import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CuidadoresPage from './pages/CuidadoresPage';
import CaregiverDetailPage from './pages/CaregiverDetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Caregiver } from './lib/types';
import ChatWindow from './components/chat/ChatWindow';

function App() {

 const [chatCaregiver, setChatCaregiver] = useState<Caregiver | null>(null);

  const handleOpenChat = (caregiver: Caregiver) => {
    setChatCaregiver(caregiver);
  };

  const handleCloseChat = () => {
    setChatCaregiver(null);
  };



  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cuidadores" element={<CuidadoresPage />} />
            {/* Passing the function to open the chat to the detail page */}
            <Route 
              path="/cuidadores/:id" 
              element={<CaregiverDetailPage onOpenChat={handleOpenChat} />} 
            />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Renderiza a janela de chat se um cuidador for selecionado */}
        {chatCaregiver && (
          <ChatWindow caregiver={chatCaregiver} onClose={handleCloseChat} />
        )}
      </div>
    </Router>
  );
}

export default App;