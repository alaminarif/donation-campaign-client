"use client";
import { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & TFormConfig;

const DCForm = ({ children, submitHandler, defaultValues }: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<TFormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default DCForm;
