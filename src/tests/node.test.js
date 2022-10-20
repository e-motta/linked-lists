import Node from '../node';

it('creates Node with correct value and nextNode)', () => {
  const node = Node('test');
  expect(node.value).toBe('test');
  expect(node.nextNode).toBe(null);
  node.nextNode = {};
  expect(JSON.stringify(node.nextNode)).toBe('{}');
});
