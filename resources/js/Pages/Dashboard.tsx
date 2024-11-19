import Heading1 from '@/Components/Typography/Heading1';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Overview" />

            <div className="px-10">
                <div className="mx-auto">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Heading1>Overview</Heading1>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
