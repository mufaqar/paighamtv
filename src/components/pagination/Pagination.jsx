import { useRouter } from "next/router";
import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({endCursor}) {
     const [active, setActive] = React.useState(1);
     const router=useRouter()
     return (
          <div className="flex items-center container mx-auto px-4 justify-between mb-20 gap-4">
               <button className="text-lg text-gray-400 hover:text-black flex items-center gap-1" onClick={()=>router.push(`?endCursor=${endCursor}?method=previous`)}> <FiArrowLeft/> Previous </button>
               <button className="text-lg text-gray-400 hover:text-black flex items-center gap-1" onClick={()=>router.push(`?endCursor=${endCursor}?method=next`)}> Next <FiArrowRight/></button>
          </div>
     );
}