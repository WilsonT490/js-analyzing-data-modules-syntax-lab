require('datejs');

function combineUsers(...args){
  const combinedObject = {
    users: []
  };
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      combinedObject.users.push(...arg);
    } else {
      combinedObject.users.push(arg);
    }
  });
  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};