import type { Question } from "$lib/Question";
import { writable } from "svelte/store";

function getQuestions() {
    const {subscribe, set, update} = writable<Question[]>([]);

    return {
        update: (questionList: Question[]) => set(questionList),
        subscribe,
        reset:() => set([])
    }
}

export const dummyQuestions: Question[] = [
    {
        question: "How does a candle work?",
        answer: "It burns until there is no more wax and then it dies and goes to candle heaven, yay!"
    },
    {
        question:"How long should you burn candles?",
        answer: "4 hours"
    }
];

export const questionList = getQuestions();