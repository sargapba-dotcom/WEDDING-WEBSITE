import { Route, createRootRoute } from '@tanstack/react-router';
import { ReactNode } from 'react';

export const rootRoute = createRootRoute({
  component: RootComponent,
});

function RootComponent({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export { rootRoute as Route };
