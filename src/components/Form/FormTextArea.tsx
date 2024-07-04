import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";
// const { TextArea } = Input;
type TTextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder: string;
};
const FormTextArea = ({ name, label, rows, value, placeholder }: TTextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input.TextArea rows={rows} placeholder={placeholder} {...field} defaultValue={value} />}
      />
    </div>
  );
};

export default FormTextArea;
