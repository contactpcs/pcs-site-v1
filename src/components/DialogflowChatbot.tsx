import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const DialogflowChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>{`
        .chatbot-widget {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .chatbot-iframe-container {
          width: 350px;
          height: 430px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(15, 114, 186, 0.35), 0 2px 12px rgba(0,0,0,0.4);
          border: 1.5px solid rgba(15, 114, 186, 0.4);
          background: #081627;
          opacity: 0;
          transform: translateY(16px) scale(0.97);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .chatbot-iframe-container.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .chatbot-iframe-container iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .chatbot-toggle-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f72ba 0%, #0a5a94 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(15, 114, 186, 0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          color: #fff;
          flex-shrink: 0;
        }

        .chatbot-toggle-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(15, 114, 186, 0.65);
        }

        .chatbot-toggle-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 420px) {
          .chatbot-iframe-container {
            width: calc(100vw - 32px);
            right: 16px;
          }
          .chatbot-widget {
            right: 16px;
            bottom: 20px;
          }
        }
      `}</style>

      <div className="chatbot-widget">
        <div className={`chatbot-iframe-container ${isOpen ? "open" : ""}`}>
          {isOpen && (
            <iframe
              src="https://bot.dialogflow.com/d8a2b07e-955d-4938-a03c-15134d76cb3a"
              allow="microphone;"
              title="PCS AI Chatbot"
            />
          )}
        </div>

        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </>
  );
};

export default DialogflowChatbot;
