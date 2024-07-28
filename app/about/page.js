import Image from 'next/image';
import Link from 'next/link';

export default function OurService({ href, color, text }) {

  return (
  <div className="flex flex-col md:flex-row items-center md:items-start my-12 px-6 pt-20 md:px-12 animate-fadeIn">
      <div className="flex-shrink-0">
        <Image
          src="/images/ceo.png" // 画像ファイルのパスを指定
          alt="Dr. Jackie F. Steele"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="mt-4 text-center font-bold text-lg">Dr. Jackie F. Steele</div>
        <Link href="https://en-joi.com/event-recap-purchasing-power-with-purpose-how-supplier-diversity-works-for-everyone-an-accj-hybrid-event/">
          <Image
            src="/images/link.png" // 画像ファイルのパスを指定
            alt="Event"
            width={200}
            height={200}
            className="mt-4"
          />
        </Link>
      </div>
      <div className="mt-8 md:mt-0 md:ml-12">
        <h2 className="text-3xl font-bold">enjoiの創業者 & CEO</h2>
        <p className="mt-4 text-lg">
          ドクター・ジャッキー・F・スティールは、トリリンガルの政治学者であり、著者、国際スピーカー、そして東京大学の元准教授です。彼女は3冊の書籍と30以上の学術記事を執筆し、法、政策、交差的公平性に関する研究を行っています。カナダ大使館と長年にわたる協力関係を持ち、国連のジェンダー平等、多様性、LGBTQインクルージョン、災害/危機リスクガバナンスに関する会議で助言を行っています。
        </p>
        <p className="mt-4 text-lg">
          enjoi Japan K.K.およびenjoi Innovation Inc (Canada)の創設者兼CEOとして、スティール博士は、リーダーに対して多様性と公平性の革新的戦略（DEI）をエビデンスに基づいたビジネス戦略として指導しています。彼女は2021年にAPAC Entrepreneurによって「最もインスピレーションを与える日本の起業家」の一人に選ばれ、2023年にはJapan Timesのサステナビリティ特集に取り上げられました。また、4年間カナダ商工会議所の理事を務め、Pride Business Alliance Japanの理事として日本におけるサプライヤーダイバーシティを推進しています。スティール博士は2022-2023年にはAmazon Japan G.K.のシニアDEIビジネスパートナーを務めました。
        </p>
        <p className="mt-4 text-lg">
          次世代の交差的多様性リーダーを支援するために、ボランティアとしての人生において、ジャッキーはFEW Japanの代表取締役社長を務めており、LGBTQプラス女性のエンパワーメントコミュニティを支援しています。また、GRaSPP（東京大学）で開催されるWomEmpowered Internationalの戦略アドバイザーを務め、Coralus（旧SheEO）のエンジェル投資家として活動しています。
        </p>
      </div>
    </div>
  );
}
