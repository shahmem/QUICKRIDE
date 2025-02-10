import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import bg from '../../assets/images/img-3-op.jpg'
import Navbar from './Navbar';

function BookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [hasVehicle, setHasVehicle] = useState(null);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };



  return (
    <>
    <Navbar className="bg-[#ffffffd2]"/>
    <div style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover" }} className=" pt-24 pb-12 min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-[#b9b9b925] md:px-16 md:py-8 p-4 py-8 shadow-lg  flex flex-col md:flex-row md:gap-16 gap-12">
        <div className='w-[16rem] md:w-80'>
          <h2 className="text-2xl font-semibold mb-4 text-white ">Book Your Ride</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input {...register("pickup", { required: "PickUp Location is required" })} 
                     className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                     placeholder="PickUp Location" />
              {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup.message}</p>}
            </div>
            
            <div>
              <input {...register("dropoff", { required: "Dropoff Location is required" })} 
                     className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                     placeholder="Dropoff Location" />
              {errors.dropoff && <p className="text-red-500 text-sm">{errors.dropoff.message}</p>}
            </div>
            
            <div>
              <input type="date" {...register("date", { required: "Date is required" })} 
                     className="w-full px-3 py-1.5 border text-[#fffb] bg-[#2c2c2c4b] border-gray-300 rounded [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-50 " />
              {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            <div>
              <input type="time" {...register("time", { required: "Time is required" })} 
                     className="w-full px-3 py-1.5 border text-[#fffb] bg-[#2c2c2c4b] border-gray-300 rounded [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-50 " />
              {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
            </div>
            
            <div>
              <p className="block text-white">Do You Have a Vehicle?</p>
              <div className="flex gap-3 mt-2">
                <button type="button" onClick={() => setHasVehicle(true)} className={`px-4 text-sm py-1.5 bg-[#00000056] hover:bg-[#7e7e7ea1] text-white ${hasVehicle ? "bg-[#eeeeeeb9] text-black" : "" } `}>
                  I Have
                </button>
                <button type="button" onClick={() => setHasVehicle(false)} className={`px-4 py-1.5 text-sm bg-[#00000056] hover:bg-[#7e7e7ea1] text-white ${hasVehicle===false ? "bg-[#eeeeeeb9] text-black" : "" }  `}>
                  I Haven't
                </button>
              </div>
            </div>
          </form>
        </div>

        {hasVehicle && (
          <div className='w-[16rem] md:w-80'>
            <h3 className="text-xl font-semibold mb-5 text-white">Vehicle Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input {...register("vehicle.registration", { required: "Registration Number is required" })} 
                       className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                       placeholder="Registration Number" />
              </div>
              
              <div>
                <input {...register("vehicle.brand", { required: "Brand is required" })} 
                       className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                       placeholder="Brand of vehicle" />
              </div>
              
              <div>
                <input {...register("vehicle.model", { required: "Model is required" })} 
                       className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                       placeholder="Model (Variant)" />
              </div>
              <div>
                <input {...register("vehicle.year", { required: "Year is required" })} 
                       className="w-full px-3 py-1.5 border bg-[#2c2c2c4b] border-gray-300 rounded" 
                       placeholder="Year" />
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        <button type="submit" className=" text-xs px-7 font-semibold py-2.5 hover:bg-orange-700 bg-orange-600 text-white ">
          GET FARE
        </button>
      </div>
    </div>
    </>
  )
}

export default BookForm