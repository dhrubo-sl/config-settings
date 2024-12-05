"use client";

import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";
import { createProduct } from "@/http/apis";
import { redirect } from "next/navigation";
import { useState } from "react";

interface IProductInfo {
  name: string;
}

const CreateProduct = () => {
  const [productInfo, setProductInfo] = useState<IProductInfo>({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (productInfo.name) {
      const doc = await createProduct(productInfo);
      if (!doc.success) {
        window.alert(doc.message);
      }
      window.alert("Created");
      redirect("/products");
    }
  };

  return (
    <div className="max-w-md">
      <form className="max-w-md">
        <InputField
          type="text"
          name="name"
          value={productInfo.name}
          onChange={handleChange}
          label="Product Name"
          required
        />

        <SubmitButton onClickHandler={handleSubmit} title="Submit" />
      </form>
    </div>
  );
};

export default CreateProduct;
