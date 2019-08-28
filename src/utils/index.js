export const closeHashModal = history => {
  if(!history) return;
  const {location} = history;
  const {hash, ...newLocation} = location;
  history.push({...newLocation, hash: ""}); 
}