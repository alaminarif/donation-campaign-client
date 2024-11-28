"use client";

import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const DCInput = ({ type, name, label, disabled }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" disabled={disabled} />
            {/* {error && <small style={{ color: "red" }}> {"error"}</small>} */}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default DCInput;