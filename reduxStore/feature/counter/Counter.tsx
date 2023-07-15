"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAMount } from "./counterSlice";
import { RootState } from "@/reduxStore/store/store";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const addValue: number = incrementAmount;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <section>
        <p>{count}</p>
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={incrementAmount}
            id="a"
            onChange={(e) => {
              let res = parseInt(e.target.value);
              if (!isNaN(res)) setIncrementAmount(res);
            }}
          />
          <div>
            <button onClick={() => dispatch(incrementByAMount(addValue))}>
              Add AMount
            </button>
            <button onClick={resetAll}>Reset</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
