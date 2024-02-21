import { useRouter } from 'next/router'
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Gargalt() {
  const router = useRouter();
  return (
    <main class="font-montserrat">
      <div className="w-full h-40 flex justify-between text-black dark:text-[#ddd] text-base">
          <img
            onClick={()=>router.push("/")}
            class="h-8 mt-8 ml-[5%]"
            src="https://mngs.mn/main-logo.svg"
          />
          <div class="flex font-bold mt-8">
            <h1>
              Гаргалтууд
            </h1>
            <h1  onClick={()=>router.push("/bichleg")} class="ml-10">
              Бичлэг
            </h1>
            <h1 class="ml-10">
              Хайх
            </h1>
          </div>
          <button 
            type="button"
            class=" h-10 mt-8 mr-[5%] text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            LOG IN
          </button>
        </div>
        <div  class="flex font-montserrat font-bold text-2xl justify-center">
          <h1>
          Гаргалтууд
          </h1>
        </div>
        <div>
        <button 
            type="button"
            class="bg-[#e0105c] h-10 mt-8 ml-10 hover:text-white border border-gray-800 hover:bg-[#e0205c] font-medium rounded-md text-base px-5 py-1.5 text-center flex justify-items-end"
          >
            Шүүлтүүр
        </button>
          <div class="grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-10 ml-10 mr-10 mt-6">
          <div>
            <img src="https://api.mngs.mn/storage/project/posters/BefM6nUGfDF0RSPAxZ4NupKx7fXyzJEhYHHlyeh8.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            Хайкюүү!! Тусгай Бүлэг: "Амлалт"
              </h1>
          </div>
          <div>
            <img src="https://api.mngs.mn/storage/project/posters/Hi5vPO6i8aefVj78N3U1wlGSm9M3XnepOJbTYZIn.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Боруто: Хос цэнхэр хуй салхи
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/bv6TLKlzZKTkXoXIBaLlLuhcPWGO6RipLkPBFcZm.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Токиогийн өшөө авагчид
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/skqJEhf2SQmbY4dCUYSaPTJlUlJqwgPDMq6ijtMC.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Дарк Найтс Метал
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/qQ8TerAz0iBV0y5PyOZPr3TTbCGDWIudMyr5FWQY.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Хар шидийн дайн: Зэро
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/M5qaM4CFUFpefTiXXvzk8tdzSsoQIrUw0QvXGRN0.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Би аалз, тэгээд юу гэж?
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/aSp6X4vGeSc8XDk30OTuZi5f4ZyMlfnHuX3daJWM.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Дарк Мультиверсийн түүхүүд
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/aSab6HQruIGyPeCIGyaVJeFrTHJByGlQtAwpYTjV.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Баяртай, Эри
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/SKOxQ6v1D90DuSIuKy2FjOGMGqkVqSjHPngjz7Ox.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Од харуулдагч нохой
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/fRPpnTZC6x7Dpn4BdFoni0zb1Yc1G8glHctHhx8Q.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Чамд хэрэгтэй зүйл бол Аллага
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/BesCvpIsNbMJhqc2PDC78YUtMQCgDSpueUgFNhVD.png"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Уан Пийс
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/GtikBxOzmgshd0MRXzzgAoDTFpi5nX3ISfAFuGkR.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Блью Лок
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/IpUQvxngoB44yU4JPONprDKyexKMS5N6ofhkO2xb.png"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Чөтгөрийн урхидалт
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/0FP88JxvGYybL18tPJEdE8VPJJnxgAvCVqPNaoCF.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Орижин
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/0bvRKOZ3xHhnogJBRrsVxoR9F0InFU3FaqsYbCGG.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Хөрөөн хүн
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/3Upq2Y2wcroBnCXEE7TN9OB5CBmg9zCayc4tKGkZ.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Таван ихэр сүйт бүсгүй
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/4ELP5bDF9Uc7UvCz26riZl5DoQgF0ZS8aYF0LaxO.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Франкс дахь миний хонгор
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/VDSamZR6aZRm6x3iZRywTrwFtnYPVXKmESbKFXTt.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
              Гэрэлт цохны гэрлэлт
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/project/posters/U2QasvlmJJPCwcjfMu28IFHGNrTn1yqWhGtdTvmX.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            Боруто: Нарутогийн хойч үе
              </h1>
          </div>
          <div>
            <img src="https://api.mngs.mn/storage/project/posters/pV3oaPy4fZfI2EqJIFyRS3mYcM9sXC38lJExA9d6.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            Хар шидийн дайн
              </h1>
          </div>
        </div>
          <div class="flex font-montserrat font-bold mt-14 justify-around">
            <h1>
            Бидний тухай
            </h1>
            <h1 class="ml-10">
            © 2024 Mangas
            </h1>
            <h1 class="ml-10">
            Холбоо барих
            </h1>
          </div>
      </div>
    </main>
  );
}
