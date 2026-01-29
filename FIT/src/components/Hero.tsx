import { Button } from "./ui/button";
import { Flame } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const TELEGRAM_LINK = "https://t.me/WinhelI";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1687349815539-047059cdc478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHdvcmtvdXQlMjBneW18ZW58MXx8fHwxNzY0ODg3NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Fitness training"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-4">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-orange-400">Обмежена пропозиція</span>
          </div>

          <h1 className="text-5xl md:text-7xl tracking-tight">
            ДОСЯГНИ ТІЛА МРІЇ <br />
            <span className="text-orange-500">ЗА 4 ТИЖНІ</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Професійні тренування, персональне харчування та підтримка експерта на кожному етапі
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg"
              onClick={() => window.open(TELEGRAM_LINK, "_blank")}
            >
              Зареєструватися
            </Button>

            <div className="flex items-center gap-3">
              <span className="text-2xl text-gray-400 line-through">599 грн</span>
              <span className="text-4xl text-orange-500">399 грн</span>
              <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl text-orange-500">500+</div>
              <div className="text-gray-400">Задоволених клієнтів</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-orange-500">4</div>
              <div className="text-gray-400">Тижні до результату</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-orange-500">100%</div>
              <div className="text-gray-400">Гарантія результату</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}