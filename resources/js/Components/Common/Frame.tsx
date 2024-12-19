import { ReactNode } from 'react';

interface FrameProps {
    children: ReactNode;
}

export default function Frame({ children }: FrameProps) {
    return (
        <div className="px-10">
            <div className="mx-auto">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="text-gray-900 p-6">
                        <div className="flex flex-col justify-between">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
