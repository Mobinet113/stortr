import Button from '@/Components/Common/Button';
import Frame from '@/Components/Common/Frame';
import Modal from '@/Components/Common/Modal';
import OverviewTable from '@/Components/Dashboard/OverviewTable';
import FormNewDevice from '@/Components/Form/FormNewDevice';
import Heading1 from '@/Components/Typography/Heading1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [deviceModal, setDeviceModal] = useState({
        open: false,
        title: 'Create a new...',
    });

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
                <div className="flex justify-between">
                    <Heading1>Dashboard</Heading1>

                    <Button
                        type="success"
                        onClick={() =>
                            setDeviceModal({ ...deviceModal, open: true })
                        }
                    >
                        Create new...
                    </Button>
                </div>

                <OverviewTable />
            </Frame>

            <Modal
                open={deviceModal.open}
                onClose={() => setDeviceModal({ ...deviceModal, open: false })}
            >
                <FormNewDevice
                    onFinished={() =>
                        setDeviceModal({ ...deviceModal, open: false })
                    }
                />
            </Modal>
        </AuthenticatedLayout>
    );
}
