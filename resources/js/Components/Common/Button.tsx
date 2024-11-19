import { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: 'success' | 'danger' | 'secondary';
}

export default function Button({
    children,
    onClick,
    type = 'success',
}: ButtonProps) {
    let colour = 'bg-grass text-black';

    if (type === 'danger') {
        colour = 'bg-rose text-black';
    } else if (type === 'secondary') {
        colour = 'bg-light-grey text-black';
    }

    return (
        <button
            onClick={onClick}
            className={`${colour} rounded-md px-6 py-2 text-xs font-normal`}
        >
            {children}
        </button>
    );
}
