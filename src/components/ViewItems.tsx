const ViewItems = ({ items, handleOnClick }: any) => {
  return (
    <div className="flex flex-wrap mt-2">
      {items.map((e, i) => (
        <div key={i} className="flex justify-end mr-3 ring-black ring-1">
          <span className="bg-gray-400 p-2">
            {typeof e === "object" ? <code>{JSON.stringify(e)}</code> : e}
          </span>
          <button
            type="button"
            className="px-2 bg-red-400 text-white "
            onClick={() => handleOnClick(i)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewItems;
