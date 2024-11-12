import { TAdmin, TMeta, TQueryParam, TResponseRedux } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addAdmin: build.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    getAllAdmins: build.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: ADMIN_URL,
          method: "GET",
        };
      },
      transformResponse: (response: TResponseRedux<TAdmin[]>, meta: TMeta) => {
        // console.log("inside redux", response);
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),

    getSingleAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),

    updateAdmin: build.mutation({
      query: (data) => ({
        url: `${ADMIN_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin],
    }),

    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `${ADMIN_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const { useGetAllAdminsQuery, useGetSingleAdminQuery, useAddAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation } = adminApi;
