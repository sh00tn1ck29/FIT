import { Card, CardContent } from "./ui/card";
import { CheckCircle2, Sparkles } from "lucide-react";

const features = [
  "Ефективну покрокову програму яка навчить тебе тримати смачне, солодке та правильне харчування і при цьому худнути!",
  "Прибираємо жир, приводимо м'язи в тонус",
  "Тренування від початку до результату",
  "Поради як і коли краще харчуватися",
  "Як не зриватися на дієті",
  "Як їсти на свята та худнути",
  "Абсолютно все та навіть більше, що треба для отримання результату",
];

export function WhatYouGet() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-orange-400">Що входить у програму</span>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              І найголовніше<span className="text-orange-500">:</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <Card className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-orange-500/30 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-lg md:text-xl text-white leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-zinc-700">
                <p className="text-xl md:text-2xl text-center text-white leading-relaxed">
                  Приєднуйся скоріш та твоє тіло стане{" "}
                  <span className="text-orange-500">привабливим, сильним та впевненим</span>,
                  привертаючи погляди інших ✨
                </p>
              </div>

              <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
                <p className="text-lg text-white">
                  <span className="text-orange-400">💪 В програму входить абсолютно все та навіть більше</span>,
                  що треба для отримання результату!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}