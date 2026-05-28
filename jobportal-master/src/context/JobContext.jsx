import { baseUrl, jobContext } from "../utilities";
let JobProvider = ({ children }) => {
  let addJob = async (data) => {
    try {
      await fetch(`${baseUrl}/jobs`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Job Posted Done");
    } catch {
      alert("Try After Some Time");
    }
  };
  return (
    <jobContext.Provider value={{ addJob }}>{children}</jobContext.Provider>
  );
};
export default JobProvider;
