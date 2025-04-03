import { type Snippet } from "svelte";
declare const FloatingWidget: import("svelte").Component<
    {
        asElement: string;
        role: string;
        action?: (node: HTMLElement) => any;
        colors?: string;
        class?: string | string[];
        variant?: string;
        offset?: number;
        animationParams: any;
        animationFunction: any;
        containerElementAttr?: any;
        withArrow?: boolean;
        setPosition: (node: HTMLElement) => any;
        children: Snippet;
        position: string;
    },
    {},
    ""
>;
type FloatingWidget = ReturnType<typeof FloatingWidget>;
export default FloatingWidget;
