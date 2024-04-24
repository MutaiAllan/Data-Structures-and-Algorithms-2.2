function detectCycle(head) {
    if (!head || !head.next) return null
  
    let firstNode = head
    let secondNode = head
    let isCyclePresent = false
  
    while (secondNode.next && secondNode.next.next) {
      firstNode = firstNode.next
      secondNode = secondNode.next.next
      if (firstNode === secondNode) {
        isCyclePresent = true
        break
      }
    }
  
    if (!isCyclePresent) return null
  
    firstNode = head
  
    while (firstNode !== secondNode) {
      firstNode = firstNode.next
      secondNode = secondNode.next
    }
  
    return firstNode
  }