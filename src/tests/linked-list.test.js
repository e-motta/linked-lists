import LinkedList from '../linked-list';

it('creates empty LinkedList', () => {
  const list = LinkedList();
  expect(list.list.nextNode === null);
});

it('appends node to list tail', () => {
  const list = LinkedList();
  list.append('test1');
  expect(list.tail().value).toBe('test1');
  list.append('test2');
  expect(list.at(0).value).toBe('test1');
  expect(list.tail().value).toBe('test2');
});

it('prepends node', () => {
  const list = LinkedList();
  list.prepend('test1');
  list.prepend('test2');

  expect(list.head().value).toBe('test2');
  expect(list.at(1).value).toBe('test1');
});

test('list has correct size', () => {
  const list = LinkedList();
  list.append('test1');
  list.append('test2');
  expect(list.size()).toBe(2);
  list.pop();
  expect(list.size()).toBe(1);
});

test('list contains value', () => {
  const list = LinkedList();
  list.append('test1');
  expect(list.contains('test1')).toBe(true);
});

test('find() returns correct index for value in list', () => {
  const list = LinkedList();
  list.append('test1');
  list.append('test2');
  expect(list.find('test1')).toBe(0);
  expect(list.find('test2')).toBe(1);
});

it('returns correct string representation of the list', () => {
  const list = LinkedList();
  list.append('test1');
  list.append('test2');
  expect(list.toString()).toBe('( test1 ) -> ( test2 ) -> null');
});

it('inserts node at correct index', () => {
  const list1 = LinkedList();
  list1.append('test1');
  list1.append('test2');
  list1.insertAt('insert at mid', 1);
  expect(list1.at(1).value).toBe('insert at mid');
  list1.insertAt('insert at start', 0);
  expect(list1.at(0).value).toBe('insert at start');
  list1.insertAt('insert at end', 4);
  expect(list1.at(4).value).toBe('insert at end');

  const list2 = LinkedList();
  list2.insertAt('insert', 0);
  expect(list2.at(0).value).toBe('insert');
});

it('throws error when inserting node out of range', () => {
  const list = LinkedList();
  expect(() => list.insertAt('insert', 1)).toThrow('Index out of range');
  expect(() => list.insertAt('insert', -1)).toThrow('Index out of range');
});

it('removes node at correct index', () => {
  const list1 = LinkedList();
  list1.append('test1');
  list1.append('remove from mid');
  list1.append('test3');
  list1.removeAt(1);
  expect(list1.find('remove from mid')).toBe(null);

  const list2 = LinkedList();
  list2.append('remove only');
  list2.removeAt(0);
  expect(list2.find('remove only')).toBe(null);

  const list3 = LinkedList();
  list3.append('remove from start');
  list3.append('test2');
  list3.removeAt(0);
  expect(list3.find('remove from start')).toBe(null);

  const list4 = LinkedList();
  list4.append('test1');
  list4.append('remove from end');
  list4.removeAt(1);
  expect(list4.find('remove from end')).toBe(null);
});

it('throws error when removing node out of range', () => {
  const list = LinkedList();
  expect(() => list.removeAt(1)).toThrow('Index out of range');
  expect(() => list.removeAt(-1)).toThrow('Index out of range');
});
