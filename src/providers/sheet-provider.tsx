import { ReactNode } from 'react';
import { Sidebar } from '../components/sidebar';
import { Resources } from '../components/resources';
import { Platform } from '../components/platform';



interface SheetProviderProps {
    children: ReactNode;
}

export const SheetProvider = ({ children }: SheetProviderProps) => {
    return (
        <>
            <Sidebar />
            <Resources />
            <Platform />
            {children}
        </>
    );
};
