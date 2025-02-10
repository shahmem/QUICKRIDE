import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from './Navbar';

function ProfileForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [hasVehicle, setHasVehicle] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const handleCancel = () => {
    reset();
    setHasVehicle(false);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex pt-20 items-center flex-col justify-center bg-white p-6">
      <div className="bg-[#0000001c] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 md:gap-16">
        <div className='w-[16rem] md:w-80'>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Profile Details :</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {['First Name', 'Last Name', 'Mobile Number', 'Address', 'State', 'District', 'ZipCode'].map((field) => (
              <input key={field} {...register(field.toLowerCase().replace(/ /g, '_'), { required: `${field} is required` })}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 "
                placeholder={field}
              />
            ))}
            
            <p className="block text-gray-700 mt-4">Do You Have Vehicle ?</p>
            <div className="flex gap-4 mt-2">
              <button type="button" onClick={() => setHasVehicle(true)} className="px-4 py-2 text-sm text-white bg-[#0000005d] ">
                I Have
              </button>
              <button type="button" onClick={() => setHasVehicle(false)} className="px-4 py-2 text-sm text-white bg-[#0000005d]">
                I Haven't
              </button>
            </div>
          </form>
        </div>
        
        {hasVehicle && (
          <div className='w-[16rem] md:w-80'>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Vehicle Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {['Registration Number', 'Brand of vehicle', 'Model (Variant)', 'Year'].map((field) => (
                <input key={field} {...register(`vehicle.${field.toLowerCase().replace(/ /g, '_')}`, { required: `${field} is required` })}
                  className="w-full p-2 border border-gray-300 rounded-md "
                  placeholder={field}
                />
              ))}
            </form>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button type="button" onClick={handleCancel} className="px-6 py-2 bg-gray-800 text-white rounded-md">
          Cancel
        </button>
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md">
          Add
        </button>
      </div>
    </div>
    </>
  );
}

export default ProfileForm;
