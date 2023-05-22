"use client";
import Image from "next/image";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import React from 'react';
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";

// const GET_NUMBERS_FOR_SALE_QUERY = gql`
// query GetNumbers {
//   numbersForSales {
//     id
//     number
//     sold
//   }
// }
// `

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" },
];

export default function FormRaffle() {
  // const { data } = useQuery(GET_NUMBERS_FOR_SALE_QUERY) 

  // console.log(data)
  return (
    <>
      <section
        id="formRaffle"
        className="flex w-1/2 flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div className="w-full">
          <Image
            src="/wine.svg"
            className="mx-auto h-10 w-auto"
            alt="Your Company"
            width={250}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Informe seus dados
          </h2>
        </div>

        <div className="mt-10 w-full">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Número(s)
                </label>
                <div className="container mt-2 w-full">
                  <Select
                    // defaultValue={[colourOptions[1], colourOptions[4]]}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="w-full"
                    classNamePrefix="select"
                    placeholder="Escolha os números"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="receipt"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Comprovante
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="receipt"
                        className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Anexar comprovante</span>
                        <input
                          id="receipt"
                          name="receipt"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">ou clique e solte</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF máximo de 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
