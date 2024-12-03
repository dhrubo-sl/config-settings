import { defaultButtonStyle } from "@/utils/constants";

const SubmitButton = ({ title, onClickHandler }: any) => {
  return (
    <div className="flex justify-end mt-5">
      <button
        type="button"
        onClick={onClickHandler}
        className={defaultButtonStyle}
      >
        {title}
      </button>
    </div>
  );
};

export default SubmitButton;
