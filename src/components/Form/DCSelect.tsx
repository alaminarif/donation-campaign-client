"use client";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};

const DCSelect = ({ label, name, options, disabled, mode }: TPHSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select mode={mode} style={{ width: "100%" }} {...field} options={options} size="large" disabled={disabled} />
            {error && <small style={{ color: "red" }}> {error.message}</small>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default DCSelect;
