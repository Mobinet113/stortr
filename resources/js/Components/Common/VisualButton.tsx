import { Icon } from '@/types/icon';
import { ReactElement, ReactNode } from 'react';

interface VisualButtonProps {
    children: ReactNode;
    onClick?: () => void;
    icon?: ReactElement<Icon>;
    title?: string;
}

export default function VisualButton({
    children,
    onClick,
    title,
    icon,
}: VisualButtonProps) {
    return (
        <button
            onClick={onClick}
            className="border-black group relative aspect-square overflow-hidden rounded-md border p-3 text-left transition-colors duration-500 hover:bg-cream"
        >
            <div className="relative z-10">
                <span className="mb-2 block font-medium">{title}</span>
                <p className="font-extralight">{children}</p>
            </div>

            {icon}
        </button>
    );
}
