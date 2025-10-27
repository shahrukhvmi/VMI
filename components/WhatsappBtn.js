import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923452646481"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/whatsapp.png"
        alt="Chat on WhatsApp"
        width={60}
        height={60}
        className="rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      />
    </a>
  );
}
