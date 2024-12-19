import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../Common/Button';
import LocationSelect from '../Common/LocationSelect';
import SpaceSelect from '../Common/SpaceSelect';
import Heading2 from '../Typography/Heading2';

interface FormData {
    name: string;
    description: string;
    location_id: number | null;
}

interface FormNewItemProps {
    onSubmit?: (data: FormData) => void;
    onBack?: () => void;
    onFinished?: (data: FormData) => void;
}
export default function FormNewItem({
    onSubmit,
    onBack,
    onFinished,
}: FormNewItemProps) {
    const [success, setSuccess] = useState(false);
    const [spaceId, setSpaceId] = useState(null as number | null);

    const { data, setData, post, processing, errors } = useForm({
        location_id: null as number | null,
        name: '',
        description: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post('items', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccess(true);

                if (onSubmit) {
                    onSubmit(data);
                }
            },
        });
    };

    const handleFinished = () => {
        if (onFinished) {
            onFinished(data);
        }
    };

    if (success) {
        return (
            <div>
                <Heading2>Brill!</Heading2>
                <p className="mt-3">Your item has been added successfully.</p>

                <div className="flex justify-end">
                    <Button
                        type="success"
                        disabled={processing}
                        onClick={handleFinished}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <Heading2>Create a new item</Heading2>

            <p className="-mt-3 font-extralight">
                An item is a physical object that can be found in a location.
            </p>

            <div className="my-5">
                <SpaceSelect
                    onChange={(e) => setSpaceId(e)}
                    label="The space this item can be found in"
                />
            </div>

            <div className="my-5">
                <LocationSelect
                    spaceId={spaceId}
                    onChange={(e) => setData('location_id', e)}
                />
            </div>

            <div className="my-5">
                <label htmlFor="name" className="mb-2 block text-sm font-light">
                    Name of the location (required)
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full rounded-md"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                {errors.name && (
                    <div className="text-red-500">{errors.name}</div>
                )}
            </div>

            <div className="my-5">
                <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-light"
                >
                    A brief description of the location
                </label>
                <textarea
                    name="description"
                    id="description"
                    className="w-full rounded-md"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                {errors.name && (
                    <div className="text-red-500">{errors.description}</div>
                )}
            </div>

            <div className="flex justify-between">
                <Button type="secondary" onClick={onBack}>
                    Back
                </Button>

                <Button type="success" disabled={processing}>
                    Create item
                </Button>
            </div>
        </form>
    );
}
