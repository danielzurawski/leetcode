import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

class ValidParentheses {
  public static void main(final String[] args) {
    final var vp = new ValidParentheses();
    System.out.println("isValid({[]}) " + vp.isValid("{[]}"));
    System.out.println("isValid(([)]) " + vp.isValid("([)]"));
  }

  private final Map<Character, Character> matchingBrackets = Map.of(
    "]".charAt(0), "[".charAt(0), 
    ")".charAt(0), "(".charAt(0), 
    "}".charAt(0), "{".charAt(0)
  );

  public boolean isValid(final String s) {
    final char[] chars = s.toCharArray();
    final Deque<Character> stack = new ArrayDeque<Character>();

    for (final char bracket : chars) {
      final var opening = matchingBrackets.get(bracket);
      if (opening != null) {
        if (stack.size() == 0) return false;
        if (stack.pop() != opening) return false;
      } else {
        stack.push(bracket);
      }
    }

    return stack.size() == 0;
  }
}