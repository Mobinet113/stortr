/**
 * FormNewDevice Component
 *
 * This component is used to create a new "device".
 *
 * A device can be a location, space, or an item.
 */

import IconDesk from '@/Icons/Desk';
import IconLamp from '@/Icons/Lamp';
import IconLocation from '@/Icons/Location';
import { useState } from 'react';
import VisualButton from '../Common/VisualButton';
import Heading2 from '../Typography/Heading2';
import FormNewItem from './FormNewItem';
import FormNewLocation from './FormNewLocation';
import FormNewSpace from './FormNewSpace';

interface FormData {
    space?: { name: string; description: string };
    location?: { name: string; description: string; space_id: number };
    item?: { name: string; description: string; location_id: number };
}

interface FormNewDeviceProps {
    onFinished?: (data: FormData) => void;
}

export default function FormNewDevice({ onFinished }: FormNewDeviceProps) {
    const [newDeviceType, setNewDeviceType] = useState(''); // space, location, item.

    const [formData, setFormData] = useState<FormData>({});

    const iconClassname =
        'absolute -bottom-10 -right-10 z-0 mt-2 h-40 w-40 opacity-50 transition-colors duration-500 hover:bg-cream group-hover:fill-white';

    const handleFinished = () => {
        if (onFinished) {
            onFinished(formData);
        }
    };

    return (
        <div>
            {newDeviceType === '' && (
                <div>
                    <Heading2>Create a new...</Heading2>

                    <div className="grid grid-cols-3 gap-2">
                        <VisualButton
                            title="Space"
                            onClick={() => setNewDeviceType('space')}
                            icon={<IconLocation className={iconClassname} />}
                        >
                            A space can be a room, or a section of a room.
                        </VisualButton>

                        <VisualButton
                            title="Location"
                            onClick={() => setNewDeviceType('location')}
                            icon={<IconDesk className={iconClassname} />}
                        >
                            A location is an area within a space, like a shelf
                            or a drawer.
                        </VisualButton>

                        <VisualButton
                            title="Item"
                            onClick={() => setNewDeviceType('item')}
                            icon={<IconLamp className={iconClassname} />}
                        >
                            An item is a physical object that can be found in a
                            location.
                        </VisualButton>
                    </div>
                </div>
            )}

            {newDeviceType === 'space' && (
                <FormNewSpace
                    onBack={() => setNewDeviceType('')}
                    onFinished={(data) => {
                        setNewDeviceType('location');
                        setFormData({ ...formData, space: data });
                    }}
                />
            )}

            {newDeviceType === 'location' && (
                <FormNewLocation
                    onBack={() => setNewDeviceType('')}
                    onFinished={() => setNewDeviceType('item')}
                />
            )}

            {newDeviceType === 'item' && (
                <FormNewItem
                    onBack={() => setNewDeviceType('location')}
                    onFinished={() => setNewDeviceType('')}
                />
            )}
        </div>
    );
}
