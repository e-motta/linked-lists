import Node from "./node";

const LinkedList = (value) => {
  const list = {
    value: 0, 
    nextNode: {
      value: 1, 
      nextNode: null
    }
  };

  const append = (list, value) => {
    if (list.nextNode === null) {
      list = {
        ...list,
        nextNode: {
          value,
          nextNode: null,
        }
      }
    } else {
      append(list.nextNode, value)
    }
  }

  return {
    list,
    append,
  }
}

export default LinkedList;