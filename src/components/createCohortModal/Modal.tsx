import { Dialog, DialogContent, DialogTitle, Modal } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {addCohort} from "@/redux/slices/Slice";

import CancelIcon from "@/components/icons/CancelIcon";

interface ModalProp {
    isOpen: boolean;
    onClose: () => void;
}

interface CohortObject {
    cohortName: string;
    description: string;
    program: string;
    startDate: Date;
    endDate: Date;
}

const CreateCohortModal: React.FC<ModalProp> = ({ isOpen, onClose }) => {
    const [openModal, setOpenModal] = useState<boolean>(isOpen);
    const [data, setData] = useState<CohortObject>({
        cohortName: '',
        description: '',
        program: '',
        startDate: new Date(),
        endDate: new Date(),
    });
    const dispatch = useDispatch();

    useEffect(() => {
        setOpenModal(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        onClose();
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addCohortToStore = () => {
        dispatch(addCohort(data));
    };

    const isFormEmpty = Object.values(data).some((value) => value === '');

    return (
        <Dialog open={openModal}>
            <DialogTitle>
                <div className="flex items-center justify-between">
                    <div className="font-bold">Create Cohort</div>
                    <button onClick={handleClose}>
                        <CancelIcon/>
                    </button>
                </div>
            </DialogTitle>
            <DialogContent>
                {[
                    { label: 'Cohort Name', name: 'cohortName', type: 'text', placeholder: 'Ex-cohort 1' },
                    { label: 'Description', name: 'description', type: 'text', placeholder: 'Ex-cohort 1' },
                    { label: 'Program', name: 'program', type: 'select', options: ['hello2', 'hello4', 'hello6'] },
                    { label: 'Start date', name: 'startDate', type: 'date' },
                    { label: 'End date', name: 'endDate', type: 'date' },
                ].
                map((field) => (
                    <div key={field.name} className="flex flex-col gap-2 mt-6">
                        <p className="text-sm font-normal">{field.label}</p>
                        {field.type === 'select' ? (
                            <div className="w-full h-8 border border-[#D0DCE4] rounded-sm">
                                <select
                                    className="w-full h-full"
                                    name={field.name}
                                    value={data[field.name]}
                                    onChange={handleInputChange}
                                >
                                    {field.options.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            <div className="w-full h-8 border border-[#D0DCE4] rounded-sm">
                                <input
                                    className="w-full h-full px-2"
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    value={data[field.name]}
                                    onChange={handleInputChange}
                                />
                            </div>
                        )}
                    </div>
                ))}
                <div className="flex justify-between mt-8 ml-52">
                    <button onClick={handleClose} className="border border-[#008EEF] h-12 w-28 rounded-lg text-[#008EEF]">
                        Cancel
                    </button>
                    <button
                        disabled={isFormEmpty}
                        className={`${
                            isFormEmpty ? 'bg-[#D0DCE4] w-40 h-12 rounded-lg text-white' : 'bg-[#008EEF] w-40 h-12 rounded-lg text-white'
                        }`}
                        onClick={addCohortToStore}
                    >
                        Create Cohort
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCohortModal;
