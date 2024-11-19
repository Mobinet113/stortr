import { Icon } from '@/types/icon';

export default function IconDesk({
    width = '24px',
    height = '24px',
    className,
    colour = '#e8eaed',
}: Icon) {
    return (
        <svg
            height={height}
            viewBox="0 -960 960 960"
            width={width}
            className={className}
            fill={colour}
        >
            <path d="M80-240v-480h800v480h-80v-80H640v80h-80v-400H160v400H80Zm560-320h160v-80H640v80Zm0 160h160v-80H640v80Z" />
        </svg>
    );
}
