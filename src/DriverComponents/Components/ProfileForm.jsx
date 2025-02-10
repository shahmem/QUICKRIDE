import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

function ProfileForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [hasVehicle, setHasVehicle] = useState(null);

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
    };

    const handleCancel = () => {
        reset();
        setHasVehicle(null);
    };

    return (
        <>
            <Navbar />
        <div className=" bg-sky-100 p-4 pt-24 md:px-24 py-12">
            <div className="pb-12 ">
                <h2 className="text-2xl font-semibold  text-gray-800">
                    Profile Details :
                </h2>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center flex-col text-xs md:text-sm  justify-center "
            >
                <div className="bg-[#0000001c] p-4 md:p-6 shadow-lg flex flex-col md:flex-row gap-6 md:gap-16">
                    <div className="w-[16rem] md:w-96">
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 font-medium">Your Photo :</label>
                                <input
                                    type="file"
                                    {...register("photo", { required: "File is required" })}
                                    className="border p-2 w-full"
                                />
                                {errors.photo && (
                                    <p className="text-red-500 text-sm">{errors.photo.message}</p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>First Name :</label>
                                <input
                                    {...register("fname", { required: "First Name is required" })}
                                    type="text"
                                    className="focus:outline-none p-1"
                                    placeholder="First Name"
                                />
                                {errors.fname && (
                                    <p className="text-sm text-[#f53232] mt-1">
                                        {errors.fname.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>Last Name :</label>
                                <input
                                    {...register("lname", { required: "Last Name is required" })}
                                    type="text"
                                    className="focus:outline-none p-1"
                                    placeholder="Last Name"
                                />
                                {errors.lname && (
                                    <p className="text-sm text-[#f53232] mt-1">
                                        {errors.lname.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label>License Number :</label>
                                <input
                                    {...register("license", { required: "License Number is required" })}
                                    type="number"
                                    className="focus:outline-none p-1"
                                    placeholder="License Number"
                                />
                                {errors.license && (
                                    <p className="text-sm text-[#f53232] mt-1">
                                        {errors.license.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 font-medium">License Image:</label>
                                <input
                                    type="file"
                                    {...register("licenseImg", { required: "License Image is required" })}
                                    className="border p-2 w-full   "
                                />
                                {errors.licenseImg && (
                                    <p className="text-red-500 text-sm">
                                        {errors.licenseImg.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-3 w-full">
                                <div className="flex-1">
                                    <label htmlFor="">Date of Issued :</label>
                                    <input
                                        type="date"
                                        {...register("dateIssued", {
                                            required: "Date is required",
                                        })}
                                        placeholder="Date of Issued"
                                        className=" md:px-7 py-1 w-full px-2 placeholder-shown:opacity-0 border text-sm text-[#111b] bg-[#fff] border-gray-300   [&::-webkit-calendar-picker-indicator]:brightness-50 "
                                    />
                                    {errors.dateIssued && (
                                        <p className="text-red-500 text-sm">
                                            {errors.dateIssued.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="">Date of Expire :</label>
                                    <input
                                        type="date"
                                        {...register("dateexpire", {
                                            required: "Date is required",
                                        })}
                                        className="md:px-7 py-1 w-full px-2 border text-sm text-[#111b] bg-[#fff] border-gray-300  [&::-webkit-calendar-picker-indicator]:brightness-50 "
                                    />
                                    {errors.dateexpire && (
                                        <p className="text-red-500 text-sm">
                                            {errors.dateexpire.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <p className=" text-black mt-4">Do You Have Vehicle ?</p>
                            <div className="flex gap-4 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setHasVehicle(true)}
                                    className={`px-4 py-2 text-sm ${hasVehicle
                                            ? " text-white bg-[#000000d5]"
                                            : "bg-[#fff] text-black"
                                        } `}
                                >
                                    I Have
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setHasVehicle(false)}
                                    className={`px-4 py-2 text-sm ${hasVehicle === false
                                            ? " text-white bg-[#000000d5]"
                                            : "bg-[#fff] text-black"
                                        } `}
                                >
                                    I Haven't
                                </button>
                            </div>
                        </div>
                    </div>

                    {hasVehicle && (
                        <div className="w-[16rem] md:w-96 md:pt-6">
                            <div className="space-y-4 flex flex-col gap-3">
                                
                                <div className="flex flex-col">
                                    <label>Registration Number :</label>
                                    <input
                                        {...register("regNum", { required: "Registration Number is required" })}
                                        type="tel"
                                        className="focus:outline-none p-1"
                                        placeholder="Registration Number"
                                    />
                                    {errors.regNum && (
                                        <p className="text-sm text-[#f53232] mt-1">
                                            {errors.regNum.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label>Brand of vehicle:</label>
                                    <input
                                        {...register("brand", { required: "Brand of vehicle is required" })}
                                        type="text"
                                        className="focus:outline-none p-1"
                                        placeholder="Brand of vehicle"
                                    />
                                    {errors.brand && (
                                        <p className="text-sm text-[#f53232] mt-1">
                                            {errors.brand.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label>Model (Varient) :</label>
                                    <input
                                        {...register("model", { required: "Model (Varient) is required" })}
                                        type="text"
                                        className="focus:outline-none p-1"
                                        placeholder="Model (Varient)"
                                    />
                                    {errors.model && (
                                        <p className="text-sm text-[#f53232] mt-1">
                                            {errors.model.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label>Year :</label>
                                    <input
                                        {...register("year", { required: "Year is required" })}
                                        min='1900'
                                        max={new Date().getFullYear()}
                                        type="tel"
                                        className="focus:outline-none p-1"
                                        placeholder="Year"
                                    />
                                    {errors.year && (
                                        <p className="text-sm text-[#f53232] mt-1">
                                            {errors.year.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <div>
                                        <label className="block mb-2 font-medium">
                                            RC Image :
                                        </label>
                                        <input
                                            type="file"
                                            {...register("rcImg", {
                                                required: "RC Image is required",
                                            })}
                                            className="border p-2 w-full text-xs"
                                        />
                                        {errors.rcImg && (
                                            <p className="text-red-500 text-sm">
                                                {errors.rcImg.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Insurance Image:
                                        </label>
                                        <input
                                            type="file"
                                            {...register("insurance", {
                                                required: "Insurance Image is required",
                                            })}
                                            className="border p-2 w-full text-xs  "
                                        />
                                        {errors.insurance && (
                                            <p className="text-red-500 text-sm">
                                                {errors.insurance.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
                <div className="m-7 flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-2 text-sm bg-gray-800 text-white"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2 text-sm bg-blue-600 text-white"
                    >
                        Add
                    </button>
                </div>
            </form>

        </div>
                    </>
    );
}

export default ProfileForm;
