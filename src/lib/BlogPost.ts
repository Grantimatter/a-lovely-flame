export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
    image?: string;
}