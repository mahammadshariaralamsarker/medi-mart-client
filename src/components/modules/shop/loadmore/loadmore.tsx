'use client'
import { getAllMedicines } from '@/services/Medicine'
import { TMedicine } from '@/types/medicines.types'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import MedicinesList from '../allMedicines/medicinesList'
import { Spinner } from '../../shared/Spinner/Spinner'
const LoadMore = () => {
    const [medicinesList, setMedicinesList] = useState<TMedicine[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const {ref, inView} = useInView() 
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
     const loadMoreMedicines = async () => {
        if(!hasMore) return; 
       await delay(1000);
       const { data: newMedicines } = (await getAllMedicines(page, '', {})) ?? [];
       if(newMedicines?.data?.length === 0){
        setHasMore(false)
       }else{
        setMedicinesList((prevMedicines: TMedicine[]) => [
          ...prevMedicines,
          ...newMedicines?.data,
        ]);
        setPage((prevPage) => prevPage +1);
       }
       
     };

     useEffect(()=>{
        if(inView ){
            loadMoreMedicines()
        }
     },[inView, hasMore])
  return (
    <>
      <MedicinesList medicines={medicinesList} />
      {inView && (
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        {<Spinner />}
      </div>
      )}
    </>
  );
}

export default LoadMore
