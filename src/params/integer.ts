import type { ParamMatcher } from "@sveltejs/kit";

export function match(param) {
    return /^\d+$/.test(param);
}