// const InputField = ({
//   type = "text",
//   name,
//   value,
//   onChange,
//   label,
//   required = false,
//   placeholder = " ",
// }: any) => {
//   if (type === "checkbox") {
//     return (
//       <div className="flex items-center gap-2">
//         <input
//           type="checkbox"
//           name={name}
//           id={name}
//           checked={value}
//           onChange={onChange}
//           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
//           required={required}
//         />
//         <label
//           htmlFor={name}
//           className="text-sm font-medium text-gray-900 dark:text-gray-300"
//         >
//           {label}
//         </label>
//       </div>
//     );
//   }

//   return (
//     <div className="relative z-0 w-full mb-5 group">
//       <input
//         type={type}
//         name={name}
//         id={name}
//         value={value}
//         onChange={onChange}
//         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//         placeholder={placeholder}
//         required={required}
//       />
//       <label
//         htmlFor={name}
//         className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//       >
//         {label}
//       </label>
//     </div>
//   );
// };

// export default InputField;

const InputField = ({
  type = "text",
  name,
  value,
  onChange,
  label,
  options = [], // For dropdowns
  required = false,
  placeholder = " ",
}: any) => {
  // Checkbox Input
  if (type === "checkbox") {
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={value}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          required={required}
        />
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    );
  }

  // Select (Dropdown) Input
  if (type === "select") {
    return (
      <div className="relative z-0 w-full mb-5 group">
        <select
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required={required}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option: any, index: number) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <label
          htmlFor={name}
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      </div>
    );
  }

  // Default Input (Text, Number, etc.)
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        required={required}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
