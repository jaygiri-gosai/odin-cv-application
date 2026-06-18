import { useState } from "react";
import "../styles/EducationExperiece.css";

export default function EducationExperience({ data, onSave }) {
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
        <div className="educationSection">
          <div>
            <label className="fieldLabel">School Name: </label>
            <label>{data.schoolName}</label>
          </div>
          <div>
            <label className="fieldLabel">Title of Study: </label>
            <label>{data.study}</label>
          </div>
          <div>
            <label className="fieldLabel">Date of Study: </label>
            <label>{new Date(data.dtStudy).toLocaleDateString("en-GB")}</label>
          </div>
        </div>
      )}
      {isEdit && (
        <div className="educationFrm">
          <form name="frmEducational" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="editSchoolName">School Name: </label>
              <input
                type="text"
                name="editSchoolName"
                id="editSchoolName"
                required
                maxLength={20}
                value={draft.schoolName}
                autoComplete="off"
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    schoolName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="editStudy">Title Of Study: </label>
              <input
                type="text"
                name="editStudy"
                id="editStudy"
                required
                maxLength={20}
                autoComplete="off"
                value={draft.study}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    study: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="editDtStudy">Date Of Study: </label>
              <input
                type="date"
                name="editDtStudy"
                id="editDtStudy"
                required
                autoComplete="off"
                value={draft.dtStudy}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    dtStudy: e.target.value,
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
