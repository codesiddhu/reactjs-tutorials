import { useSelector, useDispatch } from "react-redux";
import { add, sub } from "../ReduxToolKit/Slice/CounterSlice";

const Counter = () => {

    let data = useSelector((state) => state.counter);

    let dispatch = useDispatch();

    return (
        <div>
            <p>Count : {data}</p>

            <button onClick={() => dispatch(add())}>
                Add
            </button>

            <button onClick={() => dispatch(sub())}>
                Sub
            </button>
        </div>
    );
};

export default Counter;