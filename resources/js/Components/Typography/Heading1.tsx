import { ReactNode } from 'react';

interface Heading1Props {
    children: ReactNode;
}

export default function Heading1({ children }: Heading1Props) {
    return (
        <h2 className="text-2xl font-normal leading-tight text-black">
            {children}
        </h2>
    );
}