import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from './components/HamburgerMenu';


export const metadata = {
  title: "enjoi Japan K.K.",
  description: "enjoi Japan K.K.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100..900&display=swap" rel="stylesheet" />
        <script src="https://admin.theapps.jp/htdocs/js/spf.js"></script>
      </head>
      <body className="">
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-transparent z-50">
      <div className="">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="ロゴ"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          </Link>
        </div>
        <HamburgerMenu />
      </header>
          {children}
        <footer className="bg-blue-900 text-white p-4 text-center">
          © 2024 enjoi Japan K.K.
        </footer>
      </body>
    </html>
  );
}
