'use client'
import Loading from '@/app/loading';

import { useGetSingleAdminQuery } from '@/redux/api/adminApi';
import React from 'react';

type TIdProps = {
  params: any;
};

const DetailsAdminPage = ({params}: TIdProps) => {

  const { id } = params;
  console.log("details params", params, id);

  const { data: adminData, isFetching, isLoading } = useGetSingleAdminQuery(id);


  if (isLoading) {
    return <Loading />;
  }

  // if (error) {
  //   console.error("Error adding admin =>", error);
  // }

  console.log("updat amin data query =>", adminData);
  console.log(adminData.id);
  return (
    <div>
      <h1>This is details page</h1>
    </div>
  );
};

export default DetailsAdminPage;