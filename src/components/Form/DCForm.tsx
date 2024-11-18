"use client";
import { Form } from "antd";
import { ReactElement, ReactNode } from "react";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  children: ReactElement | ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const DCForm = ({ children, onSubmit, defaultValues, resolver }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<TFormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  const submit = (data: any) => {
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default DCForm;
