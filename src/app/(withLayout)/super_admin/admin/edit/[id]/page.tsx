type TIdProps = {
  params: any;
};

const EditAdminPage = ({ params }: TIdProps) => {
  const { email } = params;
  return <div>Id: {email}</div>;
};

export default EditAdminPage;
