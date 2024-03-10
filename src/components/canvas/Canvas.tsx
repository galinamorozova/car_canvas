import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import useCanvas from "../../hooks/useCanvas";
import Checkboxes from "../chechboxes/Checkboxes";
import {CanvasInputs, DrawFunction} from "../../models/models";
import CommonInfo from "../commonInfo/CommonInfo";
import {drawCarBorders, drawNumberBorders, drawNumberCenter, drawTimestamps} from "../../DrawFunctions";

const Canvas = () => {
    const [drawFn, setDrawFn] = useState<DrawFunction[]>([])
    const [inputs, setInputs] = useState<CanvasInputs>({
        drawNumberCenterType: {
            status: false,
            drawFn: drawNumberCenter
        },
        drawNumberBordersType: {
            status: false,
            drawFn: drawNumberBorders
        },
        drawCarBordersType: {
            status: false,
            drawFn: drawCarBorders
        },
        drawTimestampsType: {
            status: false,
            drawFn: drawTimestamps
        }
    });
    const canvasRef = useCanvas(drawFn);

    useEffect(() => {
        const buff: DrawFunction[] = []
        Object.values(inputs).forEach(i => {
            if (i.status) {
                buff.push(i.drawFn)
            }
        })
        setDrawFn(buff)
    }, [inputs]);

    return (
        <div className={styles.mainWrapper}>
            <canvas className={styles.canvas} ref={canvasRef} width={700} height={600}/>
            <div className={styles.infoContainer}>
                <CommonInfo/>
                <Checkboxes inputs={inputs} setInputs = {setInputs}/>
            </div>
        </div>
    );
}

export default Canvas;