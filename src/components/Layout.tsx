import Header from './Header';

import localFont from 'next/font/local';

// const AppleSDGothicNeo = localFont({
//   src: '../../public/fonts/AppleSDGothicNeoM.ttf',
//   display: 'swap',
//   variable: '--default-font',
// });

const ClashDisplayRegular = localFont({
  src: '../../public/fonts/ClashDisplay-Regular.otf',
  display: 'swap',
  variable: '--logo-font',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${ClashDisplayRegular.variable}`}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
