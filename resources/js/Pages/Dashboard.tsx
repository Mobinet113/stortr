import Button from '@/Components/Common/Button';
import Frame from '@/Components/Common/Frame';
import Modal from '@/Components/Common/Modal';
import FormNewDevice from '@/Components/Form/FormNewDevice';
import Heading1 from '@/Components/Typography/Heading1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [newDeviceOpen, setNewDeviceOpen] = useState(false);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-gray-800 text-xl font-semibold leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Overview" />

            <Frame>
                <Heading1>Overview</Heading1>

                <Button type="success" onClick={() => setNewDeviceOpen(true)}>
                    Create new...
                </Button>
            </Frame>

            <Modal
                open={newDeviceOpen}
                title="Create a new..."
                onClose={() => setNewDeviceOpen(false)}
            >
                <FormNewDevice />
            </Modal>
        </AuthenticatedLayout>
    );
}
