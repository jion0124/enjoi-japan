import Title from '../components/Title';

export default function DetailOurService({ href, color, text }) {

  return (
    <div className='pt-20'>
      <Title text="事業内容" />
      <div className="container mx-auto py-8 px-4">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">私たちのミッション</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Enjoi-Japanでは、「日本をもっと楽しく」という理念のもと、皆様にユニークで豊かな体験を提供することを使命としています。私たちは、日本の美しい文化、伝統、そして最新のトレンドを融合させ、皆様の生活をより彩るための多様なサービスを展開しています。
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">私たちのビジョン</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          日本の魅力を世界に広め、誰もが「楽しさ」を感じられる社会を創造すること。それがEnjoi-Japanのビジョンです。私たちは、革新的なアイデアと高度な技術を駆使し、日本ならではの素晴らしさを全ての人々に届けます。
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">提供サービス</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">1. 観光・旅行サービス</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Enjoi-Japanでは、日本各地の隠れた魅力を発掘し、特別な観光体験を提供しています。地元の文化や歴史に触れるツアー、四季折々の自然を楽しむアクティビティ、そして美食を堪能するグルメツアーなど、多岐にわたるプランをご用意しています。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">2. イベント企画・運営</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              私たちは、企業や団体向けのイベント企画・運営も手掛けています。国際会議、展示会、フェスティバル、そして企業のオフサイトミーティングまで、あらゆるイベントを成功へと導きます。経験豊富なスタッフが、クライアントのニーズに応じたオーダーメイドのイベントを実現します。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">3. コンテンツ制作</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              日本の文化や観光地を紹介する映像、出版物、デジタルコンテンツの制作も行っています。国内外のパートナーと連携し、高品質なコンテンツを制作・配信することで、日本の魅力を広く伝えます。
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">4. コンサルティングサービス</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              観光業界や地域振興に関するコンサルティングサービスを提供しています。市場分析、戦略立案、プロジェクトマネジメントまで、包括的なサポートを通じて、クライアントの成長と成功を支援します。
            </p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-4">私たちの価値観</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
          <li><strong>お客様第一</strong>: 常にお客様の満足を最優先に考え、期待を超えるサービスを提供します。</li>
          <li><strong>革新と創造</strong>: 常に新しいアイデアとアプローチを追求し、業界のリーダーとしての役割を果たします。</li>
          <li><strong>誠実と信頼</strong>: 透明性と誠実さを持って行動し、お客様やパートナーとの信頼関係を大切にします。</li>
        </ul>
      </section>
      <section className="text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Enjoi-Japanは、日本の魅力を最大限に引き出し、世界中の人々に「楽しさ」を届けることをお約束します。私たちと一緒に、日本をもっと楽しみましょう。
        </p>
      </section>
    </div>
    </div>
  );
}
