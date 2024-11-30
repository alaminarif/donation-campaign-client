"use client";

import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const DCInput = ({ type, name, label, disabled, onChange }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
              onChange={(e) => {
                field.onChange(e); // Pass the event to react-hook-form's `onChange`
                if (onChange) {
                  onChange(e.target.value); // Trigger the custom onChange if provided
                }
              }}
            />
            {error && <small style={{ color: "red" }}> {error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default DCInput;
