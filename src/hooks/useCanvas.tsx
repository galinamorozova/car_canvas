import React, {useRef} from 'react';
import {DrawFunction} from "../models/models";

const Canvas = ( draw: DrawFunction[] )=> {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas == null) return;
        const context = canvas.getContext("2d");
        if (context == null) return;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (draw.length > 0) {
            draw.forEach( i => i(context))
        }
    }, [draw.length]);

    return canvasRef;
}

export default Canvas;