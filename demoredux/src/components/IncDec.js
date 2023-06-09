import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/index";

export default function IncDec() {
  const myState = useSelector((state) => state.chageHandler);
  const dispatch = useDispatch();
  return (
    <div className="col-xl-1">
      <div class="input-group">
        <div class="input-group-prepend">
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={() => dispatch(decNumber())}
          >
            -
          </button>
        </div>
        <input
          // type="text"
          class="form-control"
          value={myState}
          // onChange={handleChange}
        />
        <div class="input-group-prepend">
          <button
            class="btn btn-outline-primary"
            type="button"
            onClick={() => dispatch(incNumber(5))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
