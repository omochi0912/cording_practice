class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> map = new HashMap<>();
        {
            map.put('}', '{');
            map.put(']', '[');
            map.put(')', '(');
        }

        for (char ch :s.toCharArray()) {
            if(map.containsKey(ch)) {
                if(stack.isEmpty() || !stack.pop().equals(map.get(ch))) return false;
            } else {
                stack.push(ch);
            }
        }

        if(stack.isEmpty()) return true;
        return false;
    }
}