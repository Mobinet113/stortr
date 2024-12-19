import { Space } from '@/types/space';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Heading2 from '../Typography/Heading2';

interface OverviewTableProps {
    className?: string;
}

export default function OverviewTable({ className }: OverviewTableProps) {
    const [data, setData] = useState<Space[] | null>(null);

    useEffect(() => {
        console.log('OverviewTable rendered');

        axios.get('/dashboard/index').then((response) => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);

    return (
        <div className={`py-10 ${className}`}>
            <Heading2>Overview</Heading2>

            {data ? (
                <>
                    {data.map((space) => (
                        <div
                            key={space.id}
                            className="border-b border-light-grey py-4"
                        >
                            <div className="mb-5">
                                <h3 className="text-lg font-light">
                                    {space.name}
                                </h3>
                                <p className="text-sm">{space.description}</p>
                            </div>

                            <div>
                                {space.locations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="my-4 rounded-lg border border-light-grey p-4 shadow-md"
                                    >
                                        <span className="mb-5 block">
                                            {location.name}
                                        </span>

                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                            {location.items.map((item) => (
                                                <div
                                                    key={item.id}
                                                    className="rounded-lg border border-light-grey p-4 shadow-md"
                                                >
                                                    <span className="mb-5 block">
                                                        {item.name}
                                                    </span>

                                                    <div className="text-xs">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
