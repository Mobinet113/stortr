import { ReactNode } from 'react';

interface Heading2Props {
    children: ReactNode;
}

export default function Heading2({ children }: Heading2Props) {
    return (
        <h2 className="text-lg font-light leading-tight text-black">
            {children}
        </h2>
    );
}
