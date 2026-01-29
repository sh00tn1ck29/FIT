import { Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-gray-400 mb-3">Автор сайта</p>
            <div className="flex items-center gap-4 justify-center">
              <a
                href="https://instagram.com/shv.mks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@shv.mks</span>
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="https://t.me/maks1mkq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>@maks1mkq</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
