import java.util.HashSet;
import java.util.Set;

//class Solution {
//    public int numIdenticalPairs(int[] nums) {
//        int count = 0;
//        Set<Integer> set = new HashSet<>();
//        for (int num : nums) {
//            if (set.contains(num)) {
//                count++;
//                System.out.println(num);
//            } else {
//                set.add(num);
//            }
//        }
//        return count;
//    }
//}

class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        for(int i = 0; i < nums.length; i++) {
            for(int j = i + 1; j < nums.length; j++) {
                if(nums[i] == nums[j]) {
                    count += 1;
                }
            }
        }
        return count;
    }
}