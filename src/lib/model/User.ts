export default class User {

    constructor(public username: string, public email: string) {}

}

export async function getUser(): Promise<User> {
    const loggedUser = await getUserLoggedIn();
    if (loggedUser != null) return loggedUser;
    
    return getGuestUser();
}

export function loginUser(u: User) {
    localStorage.setItem("user", JSON.stringify(u));
}

async function getUserLoggedIn(): Promise<User| null> {
    // FETCH USER FROM API

    return null;
}

function getGuestUser(): User {

    const userString = localStorage.getItem("user");
    if (!userString) return createGuestUser();

    console.info ("GETTIING GUEST USER FROM STRING: ", JSON.stringify(userString));
    return JSON.parse(userString) as User;
}

function createGuestUser(): User {
    console.debug("Creating user...");

    const user = new User(getDeviceId(), "guest");
    localStorage.setItem("user", JSON.stringify(user));

    return user;
}

function getDeviceId(): string {
    const device = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    console.debug(`Created device id...\n${device}`)

    return device;
}
