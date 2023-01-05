import { FC } from "react";
import { Candidate } from "../interface";

interface Props {
  index: number;
  candidate: Candidate;
  handleIncrement: any;
  handleDecrement: any;
  handleDelete: (id: number) => void;
}

const CandidateItem: FC<Props> = ({
  index,
  candidate,
  handleIncrement,
  handleDecrement,
  handleDelete,
}) => {
  const { name, count } = candidate;

  return (
    <li>
      <div>{name}</div>
      <div>{count} 표</div>
      <button type="button" onClick={() => handleIncrement(index)}>
        +
      </button>
      <button type="button" onClick={() => handleDecrement(index)}>
        -
      </button>
      <button type="button" onClick={() => handleDelete(index)}>
        삭제
      </button>
    </li>
  );
};

export default CandidateItem;
