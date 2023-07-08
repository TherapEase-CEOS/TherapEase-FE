import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
