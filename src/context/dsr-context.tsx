import { createContext, use } from 'react'
import type { ReactNode } from 'react';
import { BaseLink } from '../components/Link/base-link';
import type { BaseLinkProperties } from '../components/Link/base-link';


export interface DSRContextType {
  LinkComponent: React.ComponentType<BaseLinkProperties>;
}

export const DSRContext = createContext<DSRContextType>({
  LinkComponent: BaseLink,
});

export const useDSRContext = () => use(DSRContext);

export interface DSRProviderProperties {
  LinkComponent: React.ComponentType<BaseLinkProperties> | null;
  children?: ReactNode;
};

export const DSRProvider = ({ children, LinkComponent }: { 
  children: ReactNode; 
  LinkComponent: React.ComponentType<BaseLinkProperties>;
}) => {
  return (
    <DSRContext value={{LinkComponent: LinkComponent}}>
      {children}
    </DSRContext>
  );
};
