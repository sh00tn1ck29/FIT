import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, GraduationCap, Users } from "lucide-react";
import trainerImage from "figma:asset/203e684c3cb97cafd8423bc57d8711b1714ed11c.png";

export function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">
              Хто я <span className="text-orange-500">взагалі такий?</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={trainerImage}
                alt="Віктор Медведєв"
                className="relative rounded-2xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Друзі, у декількох словах розповім, хто я взагалі такий 😄
              </p>

              <p className="text-xl text-gray-300 leading-relaxed">
                Я — <span className="text-orange-500">Віктор Медведєв</span>, тренер з багаторічним досвідом, 
                який допоміг багатьом людям досягти тіла мрії.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-orange-400 mb-1">Медична освіта</div>
                    <div className="text-gray-400">Професійна підготовка та розуміння анатомії</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-orange-400 mb-1">Дипломований тренер</div>
                    <div className="text-gray-400">Академії фітнесу України</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-orange-400 mb-1">Багаторічний досвід</div>
                    <div className="text-gray-400">Сотні успішних трансформацій клієнтів</div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed pt-4">
                Міг би багато розповідати, але краще подивіться на результати моїх підопічних 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}