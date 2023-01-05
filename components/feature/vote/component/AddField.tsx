import { FC } from "react";

interface Props {
  value: any;
  handleChangeValue: any;
  addCandidate: any;
}

const AddField: FC<Props> = ({ value, handleChangeValue, addCandidate }) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChangeValue} />
      <button onClick={addCandidate}>인원 추가</button>
    </div>
  );
};

export default AddField;
