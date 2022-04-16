import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputDataDelete, inputUpdateTrigger } from "./store/action";
export default function Table({ setShow, show }) {
  const tableData = useSelector(state => state.reducer.desc);
  console.log(tableData);
  const dispatch = useDispatch();
  const inputDelete = id => {
    dispatch(inputDataDelete(id));
  };

  const inputEdit = id => {
    setShow(!show);
    dispatch(inputUpdateTrigger(id));
  };

  return (
    <>
      <table className="table container">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.length ? (
            <>
              {tableData.map((item, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary me-3"
                        onClick={() => inputEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="submit"
                        className="btn btn-outline-danger"
                        onClick={() => inputDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <h1>Malumot Yoq</h1>
          )}
        </tbody>
      </table>
    </>
  );
}
