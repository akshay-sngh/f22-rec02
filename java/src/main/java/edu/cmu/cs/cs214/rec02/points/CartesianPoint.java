package edu.cmu.cs.cs214.rec02.points;

public class CartesianPoint implements Point {
    private int x;
    private int y;

    public CartesianPoint (int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int getX() {
        return x;
    }

    @Override
    public int getY() {
        return y;
    }
}
