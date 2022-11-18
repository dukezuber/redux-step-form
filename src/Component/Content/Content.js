function increment(){
const data = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const increment = () => {
    let counter = data.counter;
    counter++;
    dispatch({ type: "incrementOrdecrement", payload: counter })
  }
  const dicrement = () => {
    let counter = data.counter;
    counter--;
    dispatch({ type: "incrementOrdecrement", payload: counter })
  }
  let counter = data.counter;
  return (
      <div>
        <span onClick={dicrement}>MINUS</span>
        {counter}

        <span onClick={increment}>ADD</span>
      </div>
        );
     
}
export default increment;