import { Item } from './item';

export interface Location {
    created_at: string;
    updated_at: string;
    description: string;
    group_id: number;
    user_id: number;
    space_id: number;
    id: number;
    name: string;
    tags: number[];
    items: Item[];
}
