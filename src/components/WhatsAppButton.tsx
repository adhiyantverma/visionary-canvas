import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "61413611147";
const WHATSAPP_MESSAGE = "Hi, I'd like to enquire about your services at WebNest Consultancy Services.";

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.476 2.027 7.774L0 32l8.418-2.007A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.854l-.486-.29-5.002 1.193 1.216-4.87-.317-.5A13.262 13.262 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.307-9.907c-.4-.2-2.366-1.167-2.732-1.3-.367-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.687-.622-3.213-1.98-1.188-1.058-1.99-2.365-2.222-2.765-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.656-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.306 6.833 6.033.955.412 1.7.658 2.28.843.958.305 1.83.262 2.52.159.768-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
      </svg>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
