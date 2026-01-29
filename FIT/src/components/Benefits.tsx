import { Card, CardContent } from "./ui/card";
import { Flame, Apple, Target, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: Flame,
    title: "Тренування які знищать жир та дадуть рельєф",
    description: "Мій курс не про виснажливі тренування, він про легкість та любов до занять ❤️",
    image: "https://images.unsplash.com/photo-1574269252556-89926e7c5805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwcGxhbiUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NDg4NzYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Apple,
    title: "Харчування з яким худнеш",
    description: "Смачні та збалансовані плани харчування, які допоможуть досягти цілей",
    image: "https://images.unsplash.com/photo-1606858274001-dd10efc5ce7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjQ4ODI5MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Чіткий план дій з нуля до результату",
    description: "Покроковий шлях до вашої мети з постійною підтримкою та коригуванням",
    image: "https://images.unsplash.com/photo-1687349815539-047059cdc478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHdvcmtvdXQlMjBneW18ZW58MXx8fHwxNzY0ODg3NjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Що ти <span className="text-orange-500">отримаєш?</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-zinc-800/50 border-zinc-700 overflow-hidden group hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${benefit.gradient} opacity-60`}></div>
                    <div className="absolute bottom-4 left-4 bg-black/70 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl text-white">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}