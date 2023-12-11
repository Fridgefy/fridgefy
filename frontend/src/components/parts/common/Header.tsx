import Link from 'next/link';

import { siteConfig } from '@/confg/site';
import { buttonVariants } from '@/components/ui';
import Image from 'next/image';
import { cn } from '@/lib/tailwind/utils';
import { Icons } from '@/components/icons/Icons';
import { AuthButton } from './AuthButton';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import { createNewFridge, fetchFridgeData } from '@/api/fridge/data';

export async function Header() {
  const session = await getServerSession(authOptions);

  if (session && session.user && session.user.email) {
    const data = await fetchFridgeData(session.user.email);
    // if there's no fridge for this user, create one
    if (!data) await createNewFridge(session.user.email);
  }

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
