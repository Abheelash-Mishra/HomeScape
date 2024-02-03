'use client'

import React from "react";
import Modal from "@/app/components/modals/modal";
import useRentModal from "@/app/hooks/useRentModal";

const RentModal = () => {
	const rentModal = useRentModal();

	return (
		<Modal
			title={"HomeScape Your Space"}
			isOpen={rentModal.isOpen}
			onClose={rentModal.onClose}
			onSubmit={rentModal.onClose}
			actionLabel={"Submit"}
		/>
	);
};

export default RentModal;