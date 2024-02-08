'use client';

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { LuIndianRupee } from "react-icons/lu";


interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({ id, label, type = "text", disabled, formatPrice, required, register, errors }) => {
	return (
		<div className={ "w-full relative" }>
			{ formatPrice && (
				<LuIndianRupee size={ 24 } className={ "text-neutral-700 absolute top-5 left-2" }/>
			) }
			<input
				id={ id }
				disabled={ disabled }
				{ ...register(id, { required }) }
				placeholder={ " " }                                // The empty space is a hack to make the label floaty basically in the field, computer magic
				type={ type }
				className={ `peer w-full p-4 pt-4 font-bold text-2xl bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
							${ formatPrice ? "pl-10" : "pl-2" } ${ errors[id] ? "border-rose-500 focus:border-rose-500" : "border-neutral-200 focus:border-black" } ` }
			/>
			<label className={ `absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${ formatPrice ? 'left-9' : 'left-4' } 
								peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
								${errors[id] ? 'text-rose-500' : 'text-zinc-400'}` }
			>
				{/*{ label }*/}
			</label>
		</div>
	);
};

export default Input;