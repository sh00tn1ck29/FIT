import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingDown, Award, Calendar } from "lucide-react";
import aleksandrTransformation from "figma:asset/0184ddb86f383de08e4cf637fbbc8dc4a14b4d24.png";
import irinaTransformation from "figma:asset/ed06c1a50f57672f00d9893d0a86c3e9ce152f96.png";
import yuliaTransformation from "figma:asset/06c373e573bc86c90e7d6e14c31787b68c9ca9b1.png";
import yegorTransformation from "figma:asset/0163bcd4ac279b7613dd43ccbb58e953f785db34.png";

const results = [
  {
    name: "Олександр",
    result: "скинув понад 10 кг та вивів своє життя на новий рівень 🔥",
    imageCollage: aleksandrTransformation,
  },
  {
    name: "Ірина",
    result: "скинула 7 кг, підтягнула та привела в тонус тіло за місяць",
    imageCollage: irinaTransformation,
  },
  {
    name: "Юлія",
    result: "прибрала зайвий живіт та позбулася целюліту за 1.5 місяці разом зі мною",
    imageCollage: yuliaTransformation,
  },
  {
    name: "Єгор",
    result: "набрав 14 кг чистих м'язів та позбувся комплексів, отримав тіло про ке навіть не мріяв",
    imageCollage: yegorTransformation,
  },
];

export function Results() {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Результати <span className="text-orange-500">підопічних</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Краще один раз побачити, ніж сто разів почути 😉
            </p>
          </div>

          <div className="space-y-12 mb-16">
            {results.map((result, index) => (
              <Card
                key={index}
                className="bg-zinc-800/50 border-zinc-700 overflow-hidden hover:border-orange-500/50 transition-all"
              >
                <CardContent className="p-0">
                  {result.imageCollage ? (
                    // Collage image for Aleksandr and Irina
                    <div className="relative max-w-3xl mx-auto">
                      <img
                        src={result.imageCollage}
                        alt={`${result.name} - трансформація`}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                    </div>
                  ) : (
                    // Two separate images for other clients
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Before Image */}
                      <div className="relative group">
                        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-4 py-2 rounded-lg">
                          ДО
                        </div>
                        <ImageWithFallback
                          src={result.imageBefore}
                          alt={`${result.name} - до`}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </div>

                      {/* After Image */}
                      <div className="relative group">
                        <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-2 rounded-lg">
                          ПІСЛЯ
                        </div>
                        <ImageWithFallback
                          src={result.imageAfter}
                          alt={`${result.name} - після`}
                          className="w-full h-80 md:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      </div>
                    </div>
                  )}

                  {/* Result info */}
                  <div className="p-6 md:p-8 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80">
                    <h3 className="text-2xl md:text-3xl mb-3 text-white">{result.name}</h3>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      {result.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl text-orange-500 mb-2">98%</div>
              <div className="text-gray-400">Досягають результатів</div>
            </div>
            <div className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl text-orange-500 mb-2">8</div>
              <div className="text-gray-400">Тижнів до трансформації</div>
            </div>
            <div className="bg-zinc-800/30 border border-zinc-700 rounded-xl p-6 text-center">
              <TrendingDown className="w-12 h-12 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl text-orange-500 mb-2">-15 кг</div>
              <div className="text-gray-400">Середній результат</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}