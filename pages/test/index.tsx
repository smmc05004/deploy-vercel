import { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import AddField from "../../components/feature/vote/component/AddField";
import CandidateList from "../../components/feature/vote/component/CandidateList";
import { Candidate } from "../../components/feature/vote/interface";

const Page_Test: NextPage = () => {
  const [value, setValue] = useState("");
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  console.log("candidates: ", ...candidates);

  const addCandidate = () => {
    setCandidates((prev: Candidate[]) => [...prev, { name: value, count: 0 }]);
    setValue("");
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleReset = () => {
    setCandidates([]);
  };

  return (
    <div>
      <h1>Welcome to Test Page</h1>

      <AddField
        value={value}
        addCandidate={addCandidate}
        handleChangeValue={handleChangeValue}
      />

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <CandidateList candidates={candidates} setCandidates={setCandidates} />
    </div>
  );
};

export default Page_Test;
