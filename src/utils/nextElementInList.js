const nextElementInList = (list, value) => {
  const currentValue = list.indexOf(value);
  const nextValueIndex = (currentValue + 1) % list.length;
  return list[nextValueIndex];
};

export default nextElementInList;
