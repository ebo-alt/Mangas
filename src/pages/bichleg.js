import { useRouter } from 'next/router'
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Bichleg() {
    const router = useRouter();
  return (
    <main class="font-montserrat">
      <div className="w-full h-40 flex justify-between text-black dark:text-[#ddd] text-base">
          <img
            onClick={()=>router.push("/")}
            class="h-8 mt-8 ml-[5%]"
            src="https://mngs.mn/main-logo.svg"
          />
          <div onClick={()=>router.push("/gargalt")} class="flex font-bold mt-8">
            <h1>
              Гаргалтууд
            </h1>
            <h1 class="ml-10">
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
          Бичлэг
          </h1>
        </div>
        <div>
          <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ml-10 mr-10 mt-10">
          <div>
            <img src="https://api.mngs.mn/storage/video/thumbnails/8rPt7mY17X2d3THwW8cYhfHUisI6AXH9PN6JXmhC.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
                Kenshi Yonezu - Lemon
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/LdHG7KjWUMwA3y6xKJ8ZsBTaWSRTSPMKHAtpn9Be.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
                Shinsei Kamattechan - My war
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/Knhv2H4aORmfIA13MNmmLcfpBPsTqmrAf78Avysg.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
                Adventure time - Come along with me
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/0gqoqmnvBmAsRKIlDqjF9M7BIdbxyRVSiPO1xfTS.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Ano Yume Wo Nazotte
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/IJfhEqju3C8VKfAjKNpEQm38UFAmufALgqKGy3Mh.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Encore
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/XCg0Q5c4Mmj4rJe9OjcB9b54XfJHELff1xlDgSdc.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Gunjou
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/kKSxxqSYpnXSk6ICKqHxaM7ByHxVo1uhTO1UV80A.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Halzion
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/OuXUvZRuUwIgGTXO15Et16Qw7JYA1ds5XYWOZbr5.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Idol
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/JFW2PH9XLg3AfCFv7Ppr6ppj23C6cKsBGJn4254r.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Kaibutsu
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/ZetQEFPZRMgvwElfOinpVMuJvnQhTrKn3yxcjlCk.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Sangenshoku
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/oORe80FF19exVQ4g0D5TO5sXM33xSTj6a6tjvSKU.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Tabun
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/Z9ttBshQ0LWYqJeanDbsIKP0nsi580D1iv6trr93.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Yasashii suisei
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/KYPAwQzqFgzfbPwNHrf8Su85areKoXv7u8TvfmMY.jpg"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            YOASOBI - Yoru ni kakeru
              </h1>
          </div>
          <div>
          <img src="https://api.mngs.mn/storage/video/thumbnails/dLOJkdWXf3n0I0lfFJWgtjIFHiy7hHONKXPuDLGU.png"/>
            <h1 className="flex text-xl font-montserrat font-bold justify-center mt-8 text-center">
            King Gnu - Specialz
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
