import Link from 'next/link';

import { siteConfig } from '@/confg/site';
import { buttonVariants } from '@/components/ui';
import Image from 'next/image';
import { cn } from '@/lib/tailwind/utils';
import { Icons } from '@/components/icons/Icons';
import { AuthButton } from './AuthButton';

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'/logo.png'} alt="logo" width={161} height={38} />
          </Link>
          <nav className="flex gap-6">
            {siteConfig.mainNav.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn('flex items-center text-md font-sm')}
                  >
                    <div
                      className={buttonVariants({
                        size: 'lg',
                        variant: 'ghost',
                      })}
                    >
                      {item.title}
                    </div>
                  </Link>
                )
            )}
          </nav>
          <div>
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
}
