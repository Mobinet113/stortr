import IconCross from '@/Icons/IconCross';
import { ReactNode } from 'react';
import Heading2 from '../Typography/Heading2';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    title: string;
    onClose?: () => void;
}

export default function Modal({
    children,
    open = false,
    title,
    onClose,
}: ModalProps) {
    if (!open) {
        return null;
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative z-20 w-1/2 rounded-lg bg-white p-10 pt-8">
                <div className="align-items-center flex justify-between">
                    <Heading2>{title}</Heading2>

                    <button onClick={onClose} className="h-10">
                        <IconCross />
                    </button>
                </div>
                {children}
            </div>

            <div
                className="bg-black absolute inset-0 opacity-50"
                onClick={onClose}
            ></div>
        </div>
    );
}
