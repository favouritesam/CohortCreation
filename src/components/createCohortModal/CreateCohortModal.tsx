import CancelIcon from "@/components/icons/CancelIcon";
import React, {useEffect, useRef, useState} from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DotLogo from "@/components/icons/DotLogo";
import DateComponent from "@/components/date/DateComponent";
import {FiUpload} from "react-icons/fi";
import {useDispatch} from "react-redux";
import {addCohort} from "@/redux/slices/Slice";
import axios from "axios";


interface ModalProp {
    onClose: () => void;
    open: boolean
}

// @ts-ignore
interface CohortObject extends CohortObject {
    cohortName: string;
    description: string;
    program: string;
    startDate: string;
    endDate: string;
    file:''
}
const CreateCohortModal = (open:any) => {
    const dispatch = useDispatch();
    const [programs,setPrograms] = useState<any>([])
    const [modalOpen, setModalOpen] = useState(true);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const [cohortForm, setCohortForm] = useState<CohortObject>({
        cohortName: "",
        description: "",
        program:"",
        startDate:"",
        endDate:"",
        file:''
    })
    console.log("ebyyyyy",cohortForm)

    const handleCohortForm = (e:any)=>{
        setCohortForm({...cohortForm,[e.target.name]: e.target.value});

    }
    const onCreationCohort =()=>{
        closeModal()
    }
    const dragOverHandler= (event:any)=>{
    }
    function dropHandler(ev:any) {
        console.log("file(s)dropped");
        ev.preventDefault();
        if(ev.dataTransfer.items){
            [...ev.dataTransfer.items].forEach((item,i)=>{
                if (item.kind === 'file'){
                    const file = item.getAsFile();
                    console.log(`...file[${i}].name = ${file.name}`);
                }
            });
        }else{
            [...ev.dataTransfer.files].forEach((file,i)=>{
                console.log(`...file[${file.name}]`);
            })
        }
    }



    const createCohort = async () => {
        try {

            const cohortResponse = await axios.post('https://schoolmanagement-production.up.railway.app/api/v1/school/createCohort', cohortForm);
            console.log('Cohort Response:', cohortResponse.data);
            dispatch(addCohort(cohortResponse.data))

        } catch (error) {
            console.log('Error:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const programsResponse = await axios.get('https://schoolmanagement-production.up.railway.app/api/v1/school/viewAllProgram');
                console.log('Programs Response:', programsResponse);
                setPrograms(programsResponse.data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);






    const isFormEmpty = Object.values(cohortForm).some(value => value === '');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const todayDate = new Date().toISOString().split('T')[0];
    console.log("programs",programs )

    const closeModal = () => {
        setModalOpen(false)
    };


    return (
        <>
            {modalOpen && (
                <Dialog maxWidth={'sm'} open={modalOpen} onClose={closeModal}>
                    <DialogTitle className="flex-row gap-20 justify-between flex">
                        <span className="font-extrabold leading text-xl text-[#1E323F]">
                            Create a Cohort
                        </span>
                        <div
                            className="flex justify-end cursor-pointer text-[#475661]"
                            onClick={closeModal}
                        >
                            <CancelIcon />
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <div className="flex-col flex gap-2">
                            <div className="mt-5">
                                <span className="font-bold text-base">Cohort Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Ex. Cohort 1"
                                name="cohortName"
                                className="w-full rounded h-10 border p-1"
                                onChange={handleCohortForm}
                            />

                            <span className="font-bold text-base">Description</span>
                            <textarea
                                placeholder="Ex. A space for python developers"
                                className="w-full rounded h-20 border p-1"
                                name="Description"
                                onChange={handleCohortForm}
                            />
                            <span className="font-bold text-base flex-col">Program</span>
                            <Autocomplete
                                id="combo-box-demo"
                                options={programs}
                                sx={{ width: 380, height: 'unset' }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="flex-row flex gap-4">
                        <div className="w-full flex">
                            <div>
                                <div className="mt-2"><span className="font-bold text-base">Start Date</span></div>
                                <DateComponent setCohortForm={setCohortForm} dateVar={"startDate"}/>
                            </div>
                        </div>

                            <div className="mr-24">
                                <div className="mt-2"><span className="font-bold text-base mt-2">End Date</span></div>
                                <DateComponent setCohortForm={setCohortForm} dateVar={"endDate"} />
                            </div>
                            </div>

                      <div className="mt-4"><span className="font-bold text-base">Add a cohort avatar</span></div>
                        <div className={'pb-1 relative'}
                        >
                            <br />
                            <div className="-mt-5 relative">
                                <FiUpload className="ml-44 absolute top-5" />
                                <div
                                    id="drop_zone"
                                    onDrop={dropHandler}
                                    onDragOver={dragOverHandler}
                                    draggable={true}
                                    className="h-32 w-96 border-dashed border bg-[#F6FCFF] "
                                />
                            </div>
                            <div className="absolute top-10 p-4 ">
                                <p className="font-bold text-base ml-16 text-[#475661] cursor-pointer">Drag and drop or <span className="text-[#1C8AEC]">choose file</span></p>
                                <span className="text-sm ml-10 cursor-pointer text-[#9CABB5]">240x240 px Recommended, max size 1MB </span>
                            </div>

                            <div className="flex flex-row">
                                <div className="mt-2 text-[#475661]">
                                    <DotLogo/>
                                </div>
                                <span className="text-[#475661]">You can do this later.</span>
                            </div>

                            <div className="gap-4 justify-end flex mt-10">
                                <button
                                    className="border border-blue-400 rounded w-24 h-10 text-[#008EEF] border-solid-[#008EEF]"
                                    disabled={false}
                                    title={"Cancel"}
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                {/*<button className="border w-32 rounded bg-[#D0DCE4] text-[#FFFFFF]">Create Cohort</button>*/}
                                <button disabled={false} className={`${isFormEmpty ? "bg-[#D0DCE4]  border rounded w-32 text-white" 
                                    : "bg-[#008EEF] w-32  rounded text-white"}`}  onClick={createCohort}> Create Cohort</button>

                        </div>
                        </div>

                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default CreateCohortModal;