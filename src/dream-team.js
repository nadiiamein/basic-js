
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let codM = '';
  members.map(m => {
    if(typeof m === "string") {
      m = m.trim().toUpperCase();
      codM = codM + m.slice(0, 1);
    }
  })
  return codM.split('').sort().join('')
};
