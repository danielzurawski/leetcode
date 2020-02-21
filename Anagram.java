import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Anagram {
  public static void main(String[] args) {
    System.out.println("isAnagramStream " + Anagram.isAnagramStream("tak", "kat"));
    System.out.println("isAnagramCharArray " + Anagram.isAnagramCharArray("tak", "kat"));
  }

  private static boolean isAnagramStream(String a, String b) {
    return Stream.of(a.split("")).sorted().collect(Collectors.joining())
      .equals(Stream.of(b.split("")).sorted().collect(Collectors.joining()));
  }

  private static boolean isAnagramCharArray(String a, String b) {
    char[] aChars = a.toCharArray();
    char[] bChars = b.toCharArray();

    Arrays.sort(aChars);
    Arrays.sort(bChars);

    return Arrays.equals(aChars, bChars);
  }
}