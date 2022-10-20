/* eslint-disable no-param-reassign */
import Node from './node';

const LinkedList = () => {
  const list = { nextNode: null };

  const head = () => list.nextNode;

  const tail = (nextNode = list) => {
    if (nextNode.nextNode === null) {
      return nextNode;
    }
    return tail(nextNode.nextNode);
  };

  const append = (value, nextNode = list) => {
    if (nextNode.nextNode === null) {
      nextNode.nextNode = Node(value);
    } else {
      const newNode = Node(value);
      newNode.nextNode = append(value, nextNode.nextNode);
    }
    return nextNode.nextNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    newNode.nextNode = head();
    list.nextNode = newNode;
  };

  const size = (nextNode = head()) => {
    if (nextNode === null) {
      return 0;
    }
    return 1 + size(nextNode.nextNode);
  };

  const at = (index, nextNode = head()) => {
    if (index === 0) {
      return nextNode;
    }
    return at(index - 1, nextNode.nextNode);
  };

  const pop = (nextNode = head()) => {
    if (head().nextNode === null) {
      const poppedNode = list.nextNode;
      list.nextNode = null;
      return poppedNode;
    }
    if (nextNode.nextNode.nextNode === null) {
      const poppedNode = nextNode.nextNode;
      nextNode.nextNode = null;
      return poppedNode;
    }
    return pop(nextNode.nextNode);
  };

  const contains = (value, nextNode = head()) => {
    if (nextNode === null) {
      return false;
    }
    if (nextNode.value === value) {
      return true;
    }
    return contains(value, nextNode.nextNode);
  };

  const find = (value, nextNode = head()) => {
    const index = () => {
      if (nextNode === null) {
        return null;
      }
      if (nextNode.value === value) {
        return 0;
      }
      return 1 + find(value, nextNode.nextNode);
    };
    if (index() < size()) {
      return index();
    }
    return null;
  };

  const toString = (nextNode = head()) => {
    if (nextNode === null) {
      return 'null';
    }
    return `( ${nextNode.value} ) -> ${toString(nextNode.nextNode)}`;
  };

  return {
    list,
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

export default LinkedList;
