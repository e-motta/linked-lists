import LinkedList from './linked-list';

const list = LinkedList();

list.append(0);
list.append(1);
list.append(2);
list.prepend(3);

console.log(list.toString());
