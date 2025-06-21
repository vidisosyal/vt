import { useTranslation } from 'next-i18next';

export const HeroSection = () => {
  const { t } = useTranslation('common');
  const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'Brand';
  const currency = 'TRY';
  const price = 5499;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        {t('heroTitle', { brandName })}
      </h1>
      <p className="mb-6 text-lg">{t('currency', { price, currency })}</p>
      <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow">
          {t('heroCTA1')}
        </button>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full shadow">
          {t('heroCTA2')}
        </button>
      </div>
    </section>
  );
};