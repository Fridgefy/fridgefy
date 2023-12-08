'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button, buttonVariants } from '@/components/ui';
import { Icons } from '@/components/icons/Icons';
export const AuthButton = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <Button variant={'ghost'} size={'lg'} onClick={() => signOut()}>
        <Icons.user className="h-5 w-5" />
      </Button>
    );
  }
  return (
    <Button variant={'ghost'} size={'lg'} onClick={() => signIn()}>
      <Icons.login className="h-5 w-5" />
    </Button>
  );
};
