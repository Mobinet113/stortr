import { Icon } from '@/types/icon';

export default function IconLamp({
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
            <path d="M440-200v-320H240q-20 0-32-16t-6-36l78-252q8-25 29-40.5t47-15.5h248q26 0 47 15.5t29 40.5l78 252q6 20-6 36t-32 16H520v320h-80ZM294-600h372l-62-200H356l-62 200Zm26 520v-80h320v80H320Zm160-620Z" />
        </svg>
    );
}