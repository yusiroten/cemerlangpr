'use client';
import { useLanguage } from '@/lib/translations';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm text-secondary-foreground/70">{t('footerText').replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  );
}
