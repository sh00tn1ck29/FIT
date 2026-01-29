import { Button } from "./ui/button";
import { Flame, MessageCircle } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/WinhelI";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBmaWxsPSIjZmY1NTAwIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-6">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-orange-400">Обмежена пропозиція!</span>
              </div>

              <h2 className="text-4xl md:text-5xl mb-6">
                Готовий <span className="text-orange-500">змінити</span> своє життя?
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Приєднуйся до сотень людей, які вже досягли тіла мрії з моєю допомогою. 
                Почни свою трансформацію сьогодні! 💪
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg"
                  onClick={() => window.open(TELEGRAM_LINK, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Зареєструватися зараз
                </Button>

                <div className="flex items-center gap-3">
                  <span className="text-2xl text-gray-400 line-through">599 грн</span>
                  <span className="text-4xl text-orange-500">399 грн</span>
                  <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-700">
                <p className="text-gray-500 text-sm">
                  © 2024 Віктор Медведєв. Всі права захищені.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}