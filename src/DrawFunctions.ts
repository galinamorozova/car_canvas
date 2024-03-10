import db from "./db/trace.json";
import {DrawFunction} from "./models/models";
import {MAIN_CORRECTION, TIMESTAMP_CORRECTION} from "./Constants";

const dataArr = db.history.tracks[0].points;
export const drawNumberCenter: DrawFunction = (context: CanvasRenderingContext2D) => {
    dataArr.map(i => {
        context.fillRect(i.plate.center.x * MAIN_CORRECTION,  i.plate.center.y * MAIN_CORRECTION, 2, 2);
        context.fillStyle = 'green'
    })
}
export const drawNumberBorders: DrawFunction = (context: CanvasRenderingContext2D) => {
    dataArr.map(i => {
        context.beginPath();
        context.lineTo(i.plate.region.lt.x * MAIN_CORRECTION, i.plate.region.lt.y * MAIN_CORRECTION);
        context.lineTo(i.plate.region.rt.x * MAIN_CORRECTION, i.plate.region.rt.y * MAIN_CORRECTION);
        context.lineTo(i.plate.region.rb.x * MAIN_CORRECTION, i.plate.region.rb.y * MAIN_CORRECTION);
        context.lineTo(i.plate.region.lb.x * MAIN_CORRECTION, i.plate.region.lb.y * MAIN_CORRECTION);
        context.lineTo(i.plate.region.lt.x * MAIN_CORRECTION, i.plate.region.lt.y * MAIN_CORRECTION);
        context.strokeStyle = "yellow"
        context.stroke();
    })
}
export const drawCarBorders: DrawFunction = (context: CanvasRenderingContext2D) => {
    dataArr.map(i => {
        context.beginPath();
        context.lineTo(i.vehicle_region.lt.x * MAIN_CORRECTION, i.vehicle_region.lt.y * MAIN_CORRECTION);
        context.lineTo(i.vehicle_region.rt.x * MAIN_CORRECTION, i.vehicle_region.rt.y * MAIN_CORRECTION);
        context.lineTo(i.vehicle_region.rb.x * MAIN_CORRECTION, i.vehicle_region.rb.y * MAIN_CORRECTION);
        context.lineTo(i.vehicle_region.lb.x * MAIN_CORRECTION, i.vehicle_region.lb.y * MAIN_CORRECTION);
        context.lineTo(i.vehicle_region.lt.x * MAIN_CORRECTION, i.vehicle_region.lt.y * MAIN_CORRECTION);
        context.strokeStyle = "purple"
        context.stroke();
    })
}
export const drawTimestamps: DrawFunction = (context: CanvasRenderingContext2D) => {
    dataArr.map(i => {
        const text = i.detection_state.local_timestamp;
        context.font = 'normal 6px sans-serif';
        context.fillText(text, i.plate.center.x * TIMESTAMP_CORRECTION, i.plate.center.y * TIMESTAMP_CORRECTION);
        context.fillStyle = 'white'
    })
}
