"use client";

import { DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type TDatePickerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
};

const DCDatePicker = ({ name, label, onChange }: TDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker
              value={value ? dayjs(value) : null}
              onChange={(date) => onChange(date ? dayjs(date) : null)}
              size="large"
              style={{ width: "100%" }}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default DCDatePicker;
