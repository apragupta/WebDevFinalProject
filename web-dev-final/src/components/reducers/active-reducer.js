

const activeReducer = (state = "home", action) => {
switch (action.type) {
 case 'nav-change':
      return(action.value);
 default:
  return(state);
}
};
export default activeReducer;