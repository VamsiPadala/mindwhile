import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import './WhatsAppButton.css';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(true);
  const whatsappNumber = '917995526153';
  const whatsappMessage = 'Hello! I would like to know more about Mindwhile IT Solutions.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`contact-sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* Contact Button - Orange */}
      <button className="contact-btn orange-btn" onClick={() => window.location.href = '/contact'}>
        CONTACT
      </button>

      {/* Chat Button - Blue */}
      <button className="contact-btn blue-btn" onClick={() => alert('Chat feature coming soon!')}>
        CHAT
      </button>

      {/* WhatsApp Button - Green */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-btn green-btn">
        WHATSAPP
      </a>

      {/* Toggle Arrow */}
      <button className="toggle-collapse" onClick={() => setIsOpen(!isOpen)}>
        <ChevronLeft size={20} className="toggle-icon" />
      </button>
    </div>
  );
};

