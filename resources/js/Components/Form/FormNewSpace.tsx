import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import Button from '../Common/Button';
import Heading2 from '../Typography/Heading2';

interface FormNewSpaceProps {
    onSubmit?: (data: any) => void;
    onBack?: () => void;
    onFinished?: () => void;
}

export default function FormNewSpace({
    onSubmit,
    onBack,
    onFinished,
}: FormNewSpaceProps) {
    const [success, setSuccess] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        post('spaces', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccess(true);

                if (onSubmit) {
                    onSubmit(data);
                }
            },
        });
    };

    if (success) {
        return (
            <div>
                <Heading2>Good stuff!</Heading2>
                <p className="mt-3">
                    Your space has been created successfully.
                </p>

                <div className="flex justify-end">
                    <Button
                        type="success"
                        disabled={processing}
                        onClick={onFinished}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <Heading2>Space</Heading2>

            <p className="-mt-3 font-extralight">
                A space can be a room, or a section of a room.
            </p>

            <div className="my-5">
                <label htmlFor="name" className="mb-2 block text-sm font-light">
                    Name of the space (required)
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full"
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
                    A brief description of the space
                </label>
                <textarea
                    name="description"
                    id="description"
                    className="w-full"
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
                    Create space
                </Button>
            </div>
        </form>
    );
}
