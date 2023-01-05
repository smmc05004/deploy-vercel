import { FC } from "react";
import { Candidate } from "../interface";
import CandidateItem from "./CandidateItem";

interface Props {
  candidates: Candidate[];
  setCandidates: (catedidates: Candidate[]) => void;
}

const CandidateList: FC<Props> = ({ candidates, setCandidates }) => {
  const handleIncrement = (idx: number) => {
    candidates[idx].count += 1;

    const newCandidate = [...candidates];
    setCandidates(newCandidate);
  };

  const handleDecrement = (idx: number) => {
    candidates[idx].count -= 1;

    const newCandidate = [...candidates];
    setCandidates(newCandidate);
  };

  const handleDelete = (idx: number) => {
    const newArray = [...candidates];
    newArray.splice(idx, 1);
    setCandidates(newArray);
  };

  const candidateList = candidates.map((candidate, index) => {
    return (
      <CandidateItem
        key={index}
        index={index}
        candidate={candidate}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleDelete={handleDelete}
      />
    );
  });

  return <ul>{candidateList}</ul>;
};

export default CandidateList;
