import {
  useReducer,
  Reducer,
  useCallback,
  useState,
  default as React,
} from "react";

import styles from "./YourProfile.module.css";

interface State {
  name: string;
  age: number;
}

type Action =
  | { type: "change_name"; payload: { name: string } }
  | { type: "increment_age" };

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "change_name": {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    case "increment_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
  }
};

const YourProfile = () => {
  const [state, dispatch] = useReducer(reducer, { name: "YOU", age: 31 });
  const [newName, setNewName] = useState(() => state.name);

  const handleChangeNewName = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newName = evt.target.value.trim();
      setNewName(newName);
    },
    [],
  );

  const handleSubmitNewName = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      dispatch({ type: "change_name", payload: { name: newName } });
      setNewName("");
    },
    [newName],
  );

  const handleClickGetOlder = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      dispatch({ type: "increment_age" });
    },
    [],
  );

  return (
    <div className={styles.wrapper}>
      <h2>Your Profile</h2>
      <div>
        <div>
          Name: <b className={styles["big-value"]}>{state.name}</b>
        </div>
        <div data-testid="display-age">
          Age: <b className={styles["big-value"]}>{state.age}</b>
        </div>
      </div>
      <div className={styles["form-section"]}>
        <div>
          New Name:{" "}
          <div className={styles["name-form-stack"]}>
            <input
              className={styles["form-input"]}
              type="text"
              value={newName}
              placeholder="Your new name here"
              onChange={handleChangeNewName}
            />
            <button onClick={handleSubmitNewName}>Submit</button>
          </div>
        </div>
        <div>
          Increment age:{" "}
          <button data-testid="increment-age" onClick={handleClickGetOlder}>
            Let&#39;s get older
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
