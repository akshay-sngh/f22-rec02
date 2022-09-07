import { newPolarPoint, PolarPoint } from "./points/polarPoint";

function newLine (point1: Point, point2: Point) {
    return {    
        draw() {
            const x1: number = point1.computeX();
            const y1: number = point1.computeY();
            const x2: number = point2.computeX();
            const y2: number = point2.computeY();
            
            // assume implementation 
    
            console.log("Line drawn from (" + x1 + ", " + y1 +
                        ") to (" + x2 + ", " + y2 + ")");
        }
    }
}

export { newLine }