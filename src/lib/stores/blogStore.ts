import type { BlogPost } from "$lib/BlogPost";
import { writable } from "svelte/store";

function getPosts() {
    const {subscribe, set, update} = writable<BlogPost[]>([]);

    return {
        update: (postList: BlogPost[]) => {
            set(postList)
        },
        subscribe,
        reset:() => set([])
    }
}

export const dummyPosts: BlogPost[] = [
    {
        content: "This is a really big blog post with multiple lines of stuff that is really important to read, do not skip or you may die in the near future!",
        createdAt: new Date(),
        id: 32,
        slug: "Do you even lift, bro?",
        title: "My first blog post",
    },
];

export const blogPostList = getPosts();