// app/page.js
import FirstView from './components/FirstView';
import Image from 'next/image';

export const revalidate = 60;

async function Home() {

  return (
    <main>
      <FirstView />
      <div className="my-12 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-4">事業内容</h2>
        <p className="text-lg mb-8">
        講演、ワークショップ、トレーニング、エグゼクティブコーチング、ビジネス戦略の提供を通じて、リーダーが多様な職場環境を受け入れ、効果的に導くためのサポートを行っています。
        </p>
        <div className="relative mb-12 mx-auto w-full max-w-md lg:max-w-lg">
          <Image
            src="/images/service.png"
            alt="サービスの画像"
            width={366} // 画像の幅を指定
            height={377} // 画像の高さを指定
            quality={100}
            className="w-full object-cover"
          />
        </div>
        <a href="https://page.theapps.jp/paid/join/A8hv3G40M25l54n9" className="apps-af inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
         アフィリの決済リンクにつながるボタン
        </a>
      </div>
    
      <div className="flex flex-col items-center justify-center my-12 p-6 md:px-12 bg-purple-100">
        <div className=" shadow-md rounded-md overflow-hidden">
          <Image
            src="/images/banner.png"
            alt="Wolfpack Banner"
            width={600} // 画像の幅を指定
            height={200} // 画像の高さを指定
            className="w-full object-cover"
          />
        </div>
        <a
          href="#learn-more"
          className="mt-6 px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow hover:bg-red-700 transition"
        >
          詳しくはこちら
        </a>
      </div>

      <div className="px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">最近のイベントとプレスリリース</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Event 1 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image src="/images/event1.png" alt="Event 1" width={768} height={512} className="w-full" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">「DEI」が選択肢でないときに公平な職場を創造するウェビナーの振り返り</h3>
            <p className="text-gray-700 text-base">
            enjoiのCEO、ジャッキー・F・スティール博士は、「公平な職場を創造する」というテーマでAttunedウェビナーに登壇する栄誉を受けました...
            </p>
          </div>
        </div>
        {/* Event 2 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image src="/images/event2.png" alt="Event 2" width={768} height={512} className="w-full" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">すべてのコミュニティにDEIを浸透させる</h3>
            <p className="text-gray-700 text-base">
            新しいカレンダーが能登半島での壊滅的な地震とともにスタートした中、ジャッキーは月半ばに現地を訪れました...
            </p>
          </div>
        </div>
        {/* Event 3 */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <Image src="/images/event3.jpg" alt="Event 3" width={768} height={512} className="w-full" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">ACCJチャリティーボールでの交流とダンス</h3>
            <p className="text-gray-700 text-base">
            enjoiのCEOは、6月から在宅勤務で米国商工会議所（ACCJ）に参加し、このイベントに参加できることを嬉しく思いました...
            </p>
          </div>
        </div>
      </div>
    </div>

    </main>
  );
}

export default Home;
