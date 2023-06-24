function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function createLinkedList(arr) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let i = 0; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return dummyHead.next;
  }
  
  function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = l1;
    let carry = 0;
    let sum = 0;
    let tail = dummyHead;
  
    while (current || l2 || carry) {
      const x = current ? current.val : 0;
      const y = l2 ? l2.val : 0;
  
      sum = x + y + carry;
      carry = Math.floor(sum / 10);
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
  
      if (current) current = current.next;
      if (l2) l2 = l2.next;
    }
  
    if (carry > 0) {
      tail.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  let l1 = createLinkedList([2, 4, 3]);
  let l2 = createLinkedList([5, 6, 4]);
  let result = addTwoNumbers(l1, l2);
  
  let current = result;
  let output = [];
  while (current) {
    output.push(current.val);
    current = current.next;
  }
  console.log(output);
