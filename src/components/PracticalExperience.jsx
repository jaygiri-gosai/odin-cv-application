import { useState } from "react";
import "../styles/PracticalExperience.css";

export default function PracticalExperience({ data, onSave }) {
  const [isEdit, setIsEdit] = useState(false);
  const [draft, setDraft] = useState(data);
  function handleSubmit(e) {
    e.preventDefault();
    onSave(draft);
    setIsEdit(false);
  }
  return (
    <>
      <div className="headerGroup">
        <h2>Educational Experience</h2>
        {!isEdit && (
          <a href="#" rel="noopener noreferrer" onClick={() => setIsEdit(true)}>
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
        <div className="practicalSection">
          <div>
            <label className="fieldLabel">Company Name: </label>
            <label>{data.companyName}</label>
          </div>
          <div>
            <label className="fieldLabel">Title: </label>
            <label>{data.title}</label>
          </div>
          <div>
            <label className="fieldLabel">Responsibility: </label>
            <label>{data.responsibility}</label>
          </div>
          <div>
            <label className="fieldLabel">From Date: </label>
            <label>{new Date(data.dtFrom).toLocaleDateString("en-GB")}</label>
          </div>
          <div>
            <label className="fieldLabel">To Date: </label>
            <label>{new Date(data.dtTo).toLocaleDateString("en-GB")}</label>
          </div>
        </div>
      )}
      {isEdit && (
        <div className="practicalFrm">
          <form name="frmPractical" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="editCompanyName">Company Name: </label>
              <input
                type="text"
                name="editCompanyName"
                id="editCompanyName"
                required
                maxLength={20}
                value={draft.companyName}
                autoComplete="off"
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    companyName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="editTitle">Title: </label>
              <input
                type="text"
                name="editTitle"
                id="editTitle"
                required
                maxLength={20}
                autoComplete="off"
                value={draft.title}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="editResponsibility">Responsibility: </label>
              <textarea
                name="editResponsibility"
                id="editResponsibility"
                required
                value={draft.responsibility}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    responsibility: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div>
              <label htmlFor="editDtFrom">From Date: </label>
              <input
                type="date"
                name="editDtFrom"
                id="editDtFrom"
                required
                autoComplete="off"
                value={draft.dtFrom}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    dtFrom: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="editDtTo">To Date: </label>
              <input
                type="date"
                name="editDtTo"
                id="editDtTo"
                required
                autoComplete="off"
                value={draft.dtTo}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    dtTo: e.target.value,
                  })
                }
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
