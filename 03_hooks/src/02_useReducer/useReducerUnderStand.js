
function useReducer (initState, dispath){

    const reducer = dispath.bind(initState);

    return {initState,reducer}
}

function customFuntion (action){
    switch(action.type){
      case "incre": return this.count +1
      case "decre" : return this.count -1;
      default : this
    }
};


const {initState,reducer} = useReducer({count:0},customFuntion)
const value = reducer({type:'incre'});

console.log(initState);
console.log(value);

