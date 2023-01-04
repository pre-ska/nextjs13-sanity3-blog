'use client';

import Link from 'next/link';
import React from 'react';

// ovo je da svaki post može biti klikabilan
// wrapper za postove
const ClientSideRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default ClientSideRoute;
