import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../Common/Button';
import SpaceSelect from '../Common/SpaceSelect';
import Heading2 from '../Typography/Heading2';

interface FormData {
    space_id: number | null;
    name: string;
    description: string;
}

interface FormNewLocationProps {
    onSubmit?: (data: FormData) => void;
    onBack?: () => void;
    onFinished?: (data: FormData) => void;
}

export default function FormNewLocation({
    onSubmit,
    onBack,
    onFinished,
}: FormNewLocationProps) {
    const [success, setSuccess] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        space_id: null as number | null,
        name: '',
        description: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post('locations', {
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
                <Heading2>Nice one!</Heading2>
                <p className="mt-3">
                    Your location has been created successfully.
                </p>

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
            <Heading2>Create a new location</Heading2>

            <p className="-mt-3 font-extralight">
                A location is an area within a space, like a shelf or a drawer.
            </p>

            <div className="my-5">
                <SpaceSelect onChange={(e) => setData('space_id', e)} />
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
                    Create location
                </Button>
            </div>
        </form>
    );
}
