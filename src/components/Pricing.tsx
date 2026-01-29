import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Flame, Star, Crown } from "lucide-react";

const TELEGRAM_LINK = "https://t.me/WinhelI";

const plans = [
  {
    name: "Базовий",
    oldPrice: "599",
    price: "399",
    popular: true,
    icon: Flame,
    features: [
      "Курс у закритому каналі",
      "8 тижнів тренувань",
      "План харчування",
      "Відео інструкції",
      "Підтримка в чаті",
    ],
    description: "Ідеально для самостійних занять",
  },
  {
    name: "Стандарт",
    oldPrice: "1700",
    price: "1249",
    popular: false,
    icon: Star,
    features: [
      "Все з Базового тарифу",
      "Індивідуальне ведення під час курсу",
      "Щотижневий аналіз прогресу",
      "Коригування програми",
      "Пріоритетна підтримка",
    ],
    description: "Для тих, хто хоче персональний підхід",
  },
  {
    name: "Преміум",
    price: "3500",
    popular: false,
    icon: Crown,
    features: [
      "Онлайн ведення (не прив'язане до курсу)",
      "Повністю індивідуальний план",
      "Регулярні відеодзвінки",
      "24/7 підтримка тренера",
      "Необмежений період",
    ],
    description: "Максимальна увага та результат",
    premium: true,
  },
];

export function Pricing() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Обирай свій <span className="text-orange-500">тариф</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Кожен тариф розроблений для максимального результату
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={index}
                  className={`relative overflow-hidden ${
                    plan.popular
                      ? "bg-gradient-to-b from-orange-500/20 to-zinc-900 border-orange-500"
                      : "bg-zinc-900 border-zinc-700"
                  } ${plan.premium ? "border-yellow-500" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm rounded-bl-lg flex items-center gap-1">
                      <Flame className="w-4 h-4" />
                      Популярний
                    </div>
                  )}

                  <CardHeader className="text-center pb-8 pt-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-orange-500/20" : plan.premium ? "bg-yellow-500/20" : "bg-zinc-800"
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        plan.popular ? "text-orange-500" : plan.premium ? "text-yellow-500" : "text-gray-400"
                      }`} />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-white">{plan.name}</CardTitle>
                    <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center gap-3 mb-2">
                      {plan.oldPrice && (
                        <span className="text-2xl text-gray-500 line-through">
                          {plan.oldPrice} грн
                        </span>
                      )}
                      <span className="text-5xl text-orange-500">{plan.price}</span>
                      <span className="text-gray-400">грн</span>
                    </div>
                    {!plan.premium && (
                      <p className="text-sm text-gray-500">за курс</p>
                    )}
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-4">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <div className={`mt-1 rounded-full p-0.5 ${
                            plan.popular ? "bg-orange-500" : plan.premium ? "bg-yellow-500" : "bg-zinc-700"
                          }`}>
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-300 flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-6 text-lg ${
                        plan.popular
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : plan.premium
                          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                          : "bg-zinc-800 hover:bg-zinc-700 text-white"
                      }`}
                      onClick={() => window.open(TELEGRAM_LINK, "_blank")}
                    >
                      Зареєструватися
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Є питання? Пиши в Telegram та отримай безкоштовну консультацію 💪
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}