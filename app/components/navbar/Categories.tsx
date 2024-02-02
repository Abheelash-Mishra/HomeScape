'use client';

import React from "react";

import CategoryBox from "@/app/components/CategoryBox";
import Container from "@/app/components/Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'Indulge in the tranquility of this property located near the serene beaches!'
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'Embrace the charm of this property adorned with picturesque windmills!'
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'Experience the epitome of modern living in this stylish and contemporary property!'
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'Immerse yourself in the beauty of nature with this countryside retreat!'
	},
	{
		label: 'Pools',
		icon: TbPool,
		description: 'Dive into luxury with a stunning property featuring a beautiful pool!'
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'Escape to paradise by choosing this property located on a pristine island!'
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'Enjoy the tranquility of lakeside living at this charming property near a serene lake!'
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'Hit the slopes and enjoy skiing activities with this property designed for winter enthusiasts!'
	},
	{
		label: 'Castles',
		icon: GiCastle,
		description: 'Step back in time and live like royalty in this majestic and ancient castle property!'
	},
	{
		label: 'Caves',
		icon: GiCaveEntrance,
		description: 'Experience a unique stay surrounded by the mystique of a property nestled in a captivating cave!'
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'Immerse yourself in the great outdoors with a property offering delightful camping activities!'
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'Escape to the Arctic and embrace the beauty of snow-covered landscapes with this unique property!'
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'Discover the allure of the desert with this property set in a captivating arid environment!'
	},
	{
		label: 'Barns',
		icon: GiBarn,
		description: 'Experience rustic charm and cozy living in this delightful property set within a charming barn!'
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		description: 'Indulge in opulence and sophistication at this brand-new and luxurious property!'
	}
];

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get("category");
	const pathname = usePathname();

	const isMainPage = pathname ==="/";
	if(!isMainPage){
		return null;
	}

	return (
		<Container>
			<div className={"pt-4 flex flex-row items-center justify-between overflow-x-auto"}>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						icon={item.icon}
						selected = {category === item.label}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;