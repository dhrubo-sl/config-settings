const AddItemButton = ({ title, handleOnClick }: any) => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleOnClick}
        className="px-5 py-1 bg-blue-600 m-1 text-white rounded"
      >
        {title}
      </button>
    </div>
  );
};

export default AddItemButton;
