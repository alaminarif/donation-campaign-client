"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type TSelectOptions = {
  label: string;
  value: string;
};

type TSelectFieldProps = {
  options: TSelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: TSelectOptions;
};

const FormSelectFiled = ({ options, name, size, value, placeholder, label, defaultValue }: TSelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            size={size}
            value={value}
            placeholder={placeholder}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormSelectFiled;
