import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/*
Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]

Explanation:
    The distance between (1, 3) and the origin is sqrt(10).
    The distance between (-2, 2) and the origin is sqrt(8).
    Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
    We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].
*/


interface Distance {
  public int getX();
  public int getY();
  public double getValue();
  public void setValue(double value);
}

class Point implements Distance {
  private final int x;
  private final int y;
  private double value;

  public Point(final int x, final int y) {
    this.x = x;
    this.y = y;
  }

  public void setValue(final double value) {
    this.value = value;
  }

  public double getValue() {
    return this.value;
  }

  public int getX() {
    return this.x;
  }

  public int getY() {
    return this.y;
  }
}

class MinHeap<T extends Distance> {
  private final ArrayList<T> heap = new ArrayList<>();

  private int parentIndex(final int i) {
    return (i + 1 / 2) - 1;
  }

  private void heapify() {
    int i = heap.size() - 1;
    while (i > 0 && heap.get(i).getValue() < heap.get(this.parentIndex(i)).getValue()) {
      Collections.swap(heap, i, this.parentIndex(i));
      i--;
    }
  }

  public void insert(final T object) {
    this.heap.add(object);
    this.heapify();
  }

  public ArrayList<T> getHeap() {
    return this.heap;
  }
}

public class KClosestHeap {
  public static void main(final String args[]) {
    final var a = new KClosestHeap();

    final int[][] points = { { 1, 3 }, { -2, 2 } };
  
    System.out.println("kClosest({{1,3}, {-2,2}}, 1) " + Arrays.deepToString(a.kClosest(points, 1)));
  }

  public int[][] kClosest(final int[][] points, final int K) {
    final MinHeap<Point> minHeap = new MinHeap<Point>();
    for (final int[] a : points) {
      final Point point = new Point(a[0], a[1]);
      point.setValue(this.euclidean(0, 0, point.getX(), point.getY()));
      minHeap.insert(point);
    }

    final ArrayList<Point> heap = minHeap.getHeap();
    final var results = new int[K][2];

    for (int i = 0; i < K; i++) {
      final int[] a = new int[2];
      final var p = heap.get(i);
      a[0] = p.getX();
      a[1] = p.getY();
      results[i] = a;
    }
    return results;
  }

  private double euclidean(final int x, final int y, final int x2, final int y2) {
    return Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
  }

}