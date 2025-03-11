"use client";

import Image from "next/image";
import { updateProfile } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export const UpdateProfileForm = ({ children, guest }) => {
  const { fullName, email, countryFlag, nationality, passportID } = guest;
  return (
    <form
      className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'
      action={updateProfile}
    >
      <div className='space-y-2'>
        <label>Full name</label>
        <input
          disabled
          name='fullName'
          defaultValue={fullName}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <label>Email address</label>
        <input
          disabled
          name='email'
          defaultValue={email}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
        />
      </div>

      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <label htmlFor='nationality'>Where are you from?</label>
          {countryFlag && (
            <Image
              src={countryFlag}
              alt='Country flag'
              className='h-5 rounded-sm'
            />
          )}
        </div>
        {children}
      </div>

      <div className='space-y-2'>
        <label htmlFor='passportID'>Passport ID number</label>
        <input
          name='passportID'
          defaultValue={passportID}
          className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        />
      </div>

      <div className='flex justify-end items-center gap-6'>
        <SubmitButton pendingLabel='Updating profile...'>
          Update profile
        </SubmitButton>
      </div>
    </form>
  );
};
