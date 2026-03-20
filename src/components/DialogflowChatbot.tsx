import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": {
        intent: string;
        "chat-title": string;
        "agent-id": string;
        "language-code": string;
        [key: string]: string;
      };
    }
  }
}

const DialogflowChatbot = () => {
  useEffect(() => {
    // Ensure the Dialogflow messenger script is loaded
    const script = document.querySelector(
      'script[src*="dialogflow-console/fast/messenger/bootstrap.js"]'
    );
    
    if (script) {
      // Script is already in the document
      (window as any).dfMessengerInitialized = true;
    }
  }, []);

  return (
    <>
      <style>{`
        df-messenger {
          --df-messenger-bot-message: #0f72ba;
          --df-messenger-button-titlebar-color: #0a5a94;
          --df-messenger-font-color: #fff;
          --df-messenger-send-box-border-color: #ccc;
          --df-messenger-user-message: #0f72ba;
        }

        @media (max-width: 420px) {
          df-messenger {
            --df-messenger-chat-window-height: 60vh;
            --df-messenger-chat-window-width: 85vw;
          }
        }
      `}</style>

      <df-messenger
        intent="WELCOME"
        chat-title="PCS_CHATBOT"
        agent-id="d8a2b07e-955d-4938-a03c-15134d76cb3a"
        language-code="en"
      ></df-messenger>
    </>
  );
};

export default DialogflowChatbot;
