import { Space } from '@/types/space';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface SpaceSelectProps {
    onChange?: (space_id: number) => void;
    defaultSelected?: number;
    label?: string;
}

export default function SpaceSelect({
    onChange,
    defaultSelected,
    label = 'The Space this belongs to',
}: SpaceSelectProps) {
    const [loading, setLoading] = useState(true);
    const [spaces, setSpaces] = useState([]);

    /**
     * Fetch all spaces belonging to this user's organization.
     */
    useEffect(() => {
        axios.get('/spaces').then((response) => {
            setSpaces(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <label htmlFor="name" className="mb-2 block text-sm font-light">
                {label}
            </label>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <select
                    name="space_id"
                    id="space_id"
                    onChange={(e) => onChange?.(parseInt(e.target.value))}
                    className="border-gray-300 w-full rounded-md border p-2"
                    defaultValue={defaultSelected}
                >
                    <option value="">Select a space</option>
                    {spaces.map((space: Space) => (
                        <option key={space.id} value={space.id}>
                            {space.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}
