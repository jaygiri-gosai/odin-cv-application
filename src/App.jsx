import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import "../src/styles/App.css";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationalData, setEducationalData] = useState({
    schoolName: "",
    study: "",
    dtStudy: "",
  });

  const [practicalData, setPracticalData] = useState({
    companyName: "",
    title: "",
    responsibility: "",
    dtFrom: "",
    dtTo: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <section>
        <h1>CV Application</h1>
        {!isSubmitted && (
          <div className="applicationForm">
            <form name="cvApplication" onSubmit={handleFormSubmit}>
              <h2>General Information</h2>
              <div className="fieldGroup">
                <label htmlFor="name">Name:</label>
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setGeneralData({ ...generalData, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="email">Email:</label>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    maxLength={30}
                    autoComplete="off"
                    onChange={(e) =>
                      setGeneralData({ ...generalData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="phone">Phone:</label>
                <div className="field">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setGeneralData({ ...generalData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <h2>Educational Experience</h2>
              <div className="fieldGroup">
                <label htmlFor="schoolName">School Name: </label>
                <div className="field">
                  <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setEducationalData({
                        ...educationalData,
                        schoolName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="study">Title Of Study: </label>
                <div className="field">
                  <input
                    type="text"
                    name="study"
                    id="study"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setEducationalData({
                        ...educationalData,
                        study: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="dtStudy">Date Of Study: </label>
                <div className="field">
                  <input
                    type="date"
                    name="dtStudy"
                    id="dtStudy"
                    required
                    autoComplete="off"
                    onChange={(e) =>
                      setEducationalData({
                        ...educationalData,
                        dtStudy: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <h2>Practical Experience</h2>
              <div className="fieldGroup">
                <label htmlFor="companyName">Company Name: </label>
                <div className="field">
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setPracticalData({
                        ...practicalData,
                        companyName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="title">Title: </label>
                <div className="field">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    maxLength={20}
                    autoComplete="off"
                    onChange={(e) =>
                      setPracticalData({
                        ...practicalData,
                        title: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="responsibility">Responsibility: </label>
                <div className="field">
                  <textarea
                    name="responsibility"
                    id="responsibility"
                    required
                    onChange={(e) =>
                      setPracticalData({
                        ...practicalData,
                        responsibility: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="dtFrom">From Date: </label>
                <div className="field">
                  <input
                    type="date"
                    name="dtFrom"
                    id="dtFrom"
                    required
                    autoComplete="off"
                    onChange={(e) =>
                      setPracticalData({
                        ...practicalData,
                        dtFrom: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="fieldGroup">
                <label htmlFor="dtTo">To Date: </label>
                <div className="field">
                  <input
                    type="date"
                    name="dtTo"
                    id="dtTo"
                    required
                    autoComplete="off"
                    onChange={(e) =>
                      setPracticalData({
                        ...practicalData,
                        dtTo: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="buttonGroup">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </form>
          </div>
        )}
        {isSubmitted && (
          <>
            <GeneralInformation data={generalData} onSave={setGeneralData} />
            <EducationExperience
              data={educationalData}
              onSave={setEducationalData}
            />
            <PracticalExperience
              data={practicalData}
              onSave={setPracticalData}
            />
          </>
        )}
      </section>
    </>
  );
}
