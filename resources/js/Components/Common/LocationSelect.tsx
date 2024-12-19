import { Location } from '@/types/location';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface LocationSelectProps {
    onChange?: (location_id: number) => void;
    defaultSelected?: number;
    spaceId?: number | null;
    label?: string;
}

export default function LocationSelect({
    onChange,
    defaultSelected,
    spaceId,
    label = 'The Location this belongs to',
}: LocationSelectProps) {
    const [loading, setLoading] = useState(true);
    const [locations, setLocations] = useState([]);

    /**
     * Fetch all locations belonging to this user's organization.
     */
    useEffect(() => {
        setLoading(true);
        axios
            .get('/locations', {
                params: {
                    space_id: spaceId,
                },
            })
            .then((response) => {
                setLocations(response.data);
                setLoading(false);
            });
    }, [spaceId]);

    return (
        <div>
            <label htmlFor="name" className="mb-2 block text-sm font-light">
                {label}
            </label>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <select
                    name="location_id"
                    id="location_id"
                    onChange={(e) => onChange?.(parseInt(e.target.value))}
                    className="border-gray-300 w-full rounded-md border p-2"
                    defaultValue={defaultSelected}
                >
                    <option value="">Select a location</option>
                    {locations.map((location: Location) => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
