class ListNode {
    constructor(val, next = null) {
      this.val = val
      this.next = next
    }
  }
  
function hasCycle(head) {
    if (!head || !head.next) return false
  
    let firstNode = head
    let secondNode = head.next
  
    while (firstNode !== secondNode) {
      if (!secondNode || !secondNode.next) return false
      firstNode = firstNode.next
       secondNode = secondNode.next.next
    }
  
    return true
  }