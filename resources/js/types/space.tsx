import { Location } from './location';

export interface Space {
    created_at: string;
    updated_at: string;
    description: string;
    group_id: number;
    user_id: number;
    id: number;
    name: string;
    tags: number[];
    locations: Location[];
}
