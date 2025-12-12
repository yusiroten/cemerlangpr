<<<<<<< HEAD
'use client';
import { useLanguage } from '@/lib/translations';

export default function Footer() {
  const { t } = useLanguage();
=======
export default function Footer() {
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-center items-center">
<<<<<<< HEAD
          <p className="text-sm text-secondary-foreground/70">{t('footerText').replace('{year}', new Date().getFullYear().toString())}</p>
=======
          <p className="text-sm text-secondary-foreground/70">&copy; {new Date().getFullYear()} Cemerlang Group. All rights reserved.</p>
>>>>>>> dd4335c47cbc626c5a583e9b06e581bf00ed9e38
        </div>
      </div>
    </footer>
  );
}
