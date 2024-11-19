import React, { useState } from 'react';

interface SpaceFormProps {
    space?: {
        id?: number;
        name?: string;
        description?: string;
    };
}

const SpaceForm: React.FC<SpaceFormProps> = ({ space }) => {
    const [name, setName] = useState(space?.name || '');
    const [description, setDescription] = useState(space?.description || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = { name, description };

        console.log(data);

        if (space?.id) {
            //Inertia.put(`/spaces/${space.id}`, data);
        } else {
            //Inertia.post('/spaces', data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SpaceForm;
