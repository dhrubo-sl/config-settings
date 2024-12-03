import AddItemButton from "@/components/AddItemButton";
import InputField from "@/components/InputField";
import ViewItems from "@/components/ViewItems";
import { useState } from "react";

interface IDynamicFormProps {
  fields: any;
  data: any;
  setData: any;
  callback?: any;
}

const DynamicForm = ({
  fields,
  data,
  setData,
  callback,
}: IDynamicFormProps) => {
  const initialFieldState = fields.reduce((acc, field) => {
    acc[field.name] =
      field.type === "number" ? 0 : field.type === "checkbox" ? false : "";
    return acc;
  }, {});

  const [currentItem, setCurrentItem] = useState(initialFieldState);

  // Handle input changes dynamically
  const handleInputChange = ({ target: { name, value, type, checked } }) => {
    const val =
      type === "checkbox"
        ? checked
        : type === "number"
        ? parseInt(value) || 0
        : value;
    setCurrentItem((prev) => ({ ...prev, [name]: val }));
  };

  // Add the current item to the data array
  const addItem = () => {
    const isValid = fields.every((field) =>
      field.required ? currentItem[field.name] !== "" : true
    );
    if (isValid) {
      setData((prev) => [...prev, currentItem]);
      setCurrentItem(initialFieldState);
      if (callback) {
        callback([...data, currentItem]);
      }
    } else {
      alert("Please fill all required fields.");
    }
  };

  // Remove an item by index
  const removeItem = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      {/* Render input fields dynamically */}
      <div className="flex flex-wrap">
        {fields.map(({ name, label, type, placeholder, required, data }) => (
          <InputField
            key={name}
            name={name}
            value={currentItem[name]}
            onChange={handleInputChange}
            label={label}
            placeholder={placeholder || ""}
            required={required}
            type={type || "text"}
            options={data}
          />
        ))}
      </div>
      <AddItemButton title="Add" handleOnClick={addItem} />

      <ViewItems items={data} handleOnClick={removeItem} />

      {/* Render list of items */}
      {/* <ul className="mt-4">
        {data.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <span>{JSON.stringify(item)}</span>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul> */}

      {/* JSON Preview */}
      {/* <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify({ data }, null, 2)}
      </pre> */}
    </div>
  );
};

export default DynamicForm;
