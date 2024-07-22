import React from "react";

export const UserForm = () => {
  return (
    <div className="w-50 shadow-lg p-5 m-auto mt-5 rounded">
      <form action="">
        <div class="row">
          <div class="col-3">
            <select name="gender" id="inputState" class="form-select" required>
              <option selected>Choose...</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          <div class="col-6">
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="User name"
              aria-label="User name"
              required
            />
          </div>
          <div className="col-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
