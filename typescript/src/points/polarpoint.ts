function newPolarPoint (len: number, angle: number): Point {
    function computeX (): number {
        return Math.round(len * Math.cos(angle))
    }

    function computeY (): number {
        return Math.round(len * Math.sin(angle))
    }

    return {
        getX: function (): number {
            return computeX();
        },

        getY: function (): number {
            return computeY();
        }
    }
}

export { newPolarPoint }