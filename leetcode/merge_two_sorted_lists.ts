/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 == null && list2 == null) return null;
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  let head;
  let result;
  let next;

  if (list1?.val <= list2?.val) {
    head = list1;
    list1 = list1?.next;
  } else {
    head = list2;
    list2 = list2?.next;
  }

  if (!(list1?.val == null && list2?.val == null)) head.next = result;

  while (!(list1?.val == null && list2?.val == null)) {
    if (list1?.val <= list2?.val) {
      result = list1;
      list1 = list1?.next;
      result = result.next;
    } else {
      result = list2;
      list2 = list2?.next;
      result = result.next;
    }
  }

  if (list1?.val != null) {
    result = list1;
    list1 = list1?.next;
  }

  if (list2?.val != null) {
    result = list2;
    list2 = list2?.next;
  }

  return result;
}
