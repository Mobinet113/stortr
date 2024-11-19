import { ReactNode } from 'react';

interface Heading2Props {
    children: ReactNode;
}

export default function Heading2({ children }: Heading2Props) {
    return (
        <h2 className="text-black mb-5 text-xl font-light leading-tight">
            {children}
        </h2>
    );
}
