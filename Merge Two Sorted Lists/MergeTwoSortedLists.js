/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode();
  const curr = newList;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      newList.next = new ListNode(l1.val);
      newList = newList.next;
      l1 = l1.next;
    } else {
      newList.next = new ListNode(l2.val);
      newList = newList.next;
      l2 = l2.next;
    }
  }
  newList.next = l1 || l2;
  return curr.next;
};
