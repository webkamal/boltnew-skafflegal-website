import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppQR: React.FC = () => {
  const whatsappUrl = "https://wa.me/+61416453722";
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-card text-center">
      <div className="mb-3">
        <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
        <h4 className="font-serif font-semibold text-neutral-900 text-sm">Quick WhatsApp</h4>
      </div>
      
      {/* Actual WhatsApp QR Code */}
      <div className="bg-white p-2 rounded border-2 border-green-100 mb-3">
        <div className="w-24 h-24 mx-auto">
          <img 
            src="/whatsapp-qrcode.svg" 
            alt="WhatsApp QR Code" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      <p className="text-xs text-neutral-600 mb-2">Scan to chat with us</p>
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-green-600 hover:text-green-700 font-medium transition-colors"
      >
        +61 416 453 722
      </a>
    </div>
  );
};

export default WhatsAppQR;