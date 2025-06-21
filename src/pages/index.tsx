import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}