export type DrawFunction = (context: CanvasRenderingContext2D) => void;

export type CanvasInput = {
    drawFn: DrawFunction;
    status: boolean
}

export type CanvasInputs = {
    [key: string]: CanvasInput
}