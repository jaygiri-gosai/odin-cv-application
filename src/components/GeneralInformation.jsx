import { useState } from "react";
import "../styles/GeneralInformation.css";

export default function GeneralInformation({ data, onSave }) {
  const [isEdit, setIsEdit] = useState(false);
  const [draft, setDraft] = useState(data);

  function handleEdit() {
    setDraft(data);
    setIsEdit(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(draft);
    setIsEdit(false);
  }

  return (
    <>
      <div className="headerGroup">
        <h2>General Information</h2>
        {!isEdit && (
          <a href="#" rel="noopener noreferrer" onClick={handleEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>pencil</title>
              <path
                fill="#000000"
                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
              />
            </svg>
          </a>
        )}
      </div>

      {!isEdit && (
        <div className="generalSection">
          <div>
            <label className="fieldLabel">Name: </label>
            <label>{data.name}</label>
          </div>
          <div>
            <label className="fieldLabel">Email: </label>
            <label>{data.email}</label>
          </div>
          <div>
            <label className="fieldLabel">Phone: </label>
            <label>{data.phone}</label>
          </div>
        </div>
      )}
      {isEdit && (
        <div className="generalFrm">
          <form name="frmGeneral" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="editName">Name: </label>
              <input
                type="text"
                name="editName"
                id="editName"
                value={draft.name}
                required
                maxLength={20}
                autoComplete="off"
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="editEmail">Email: </label>
              <input
                type="email"
                name="editEmail"
                id="editEmail"
                value={draft.email}
                required
                maxLength={30}
                autoComplete="off"
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="editPhone">Phone: </label>
              <input
                type="tel"
                name="editPhone"
                id="editPhone"
                value={draft.phone}
                required
                maxLength={20}
                autoComplete="off"
                onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              />
            </div>
            <div className="btnContainer">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
