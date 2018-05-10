export default (key, matchers) => {
  if (matchers['_'] === undefined)
    throw new Error('Error in match: An "_" case is mandatory');
  if (matchers[key]) return matchers[key]();
  return matchers['_']();
};
