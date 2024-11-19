import { ReactNode } from 'react';

interface Heading1Props {
    children: ReactNode;
}

export default function Heading1({ children }: Heading1Props) {
    return (
        <h1 className="text-black text-2xl font-normal leading-tight">
            {children}
        </h1>
    );
}
