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

export default function FormNewDevice() {
    const [newDeviceType, setNewDeviceType] = useState(''); // space, location, item

    const iconClassname =
        'absolute -bottom-10 -right-10 z-0 mt-2 h-40 w-40 opacity-50 transition-colors duration-500 hover:bg-cream group-hover:fill-white';

    return (
        <div>
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
                    A location is an area within a space, like a shelf or a
                    drawer.
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
    );
}
