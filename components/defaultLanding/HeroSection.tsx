import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import * as data from '../../app.json'
import { FlipWords } from '../ui/flip-words';
import clsx from 'clsx';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const words=[
    "Create next-level SaaS products",
    "Build enterprise-grade applications",
    "Launch scalable business solutions",
    "Develop cutting-edge corporate software",
    "Design innovative enterprise platforms",
  ]
  return (
    <section className="hero py-10 md:py-32">
      <div className='md:flex items-center justify-around px-5 md:px-0'>
        <div>
          <h1 className="text-lg"> {t('enterprise-saas-kit')}</h1>
          <FlipWords className='text-3xl md:text-4xl break-after-all font-bold py-5'
            words = {words}
            duration={3000}
          />
          <p className="py-6 text-lg md:text-2xl font-normal md:w-4/5">
              {t('kickstart-your-enterprise')}
          </p>
          <Image className='md:hidden' src={data.handCoding} width={500} height={200} alt='hand-coding'/>
          <LinkButtons className='hidden md:flex'/>
        </div>
       
          <Image className='hidden md:block' src={data.handCoding} width={500} height={200} alt='hand-coding'/>
          <LinkButtons className='md:hidden'/>
      </div>
    </section>
  );
};

export default HeroSection;

export const LinkButtons = ({
  className
}: {
  className?: string;
}) => {
  const { t } = useTranslation('common');
  return (
    <div className={clsx("flex items-center justify-center md:justify-start gap-4 ", className)}>
              <Link
                href="/auth/join"
                className="px-8 py-2  bg-primary text-white text-sm rounded-md font-semibold hover:bg-primary/[0.8] hover:shadow-lg"
              >
                {t('get-started')}
              </Link>
              <Link
                href="https://github.com/boxyhq/saas-starter-kit"
                className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg"
              >
                GitHub
              </Link>
            </div>
  )
}