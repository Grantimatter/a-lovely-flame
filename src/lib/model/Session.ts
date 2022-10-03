import type User from "./User";

export default interface Session {
    user: User;
    device: string;
}