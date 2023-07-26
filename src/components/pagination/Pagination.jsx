import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination() {
     const [active, setActive] = React.useState(1);





     return (
          <div className="flex items-center justify-center mb-20 gap-4">
               <button className="text-lg text-gray-400 hover:black flex items-center gap-1"> <FiArrowLeft/> Previous </button>
               <div className="flex items-center gap-2">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
               </div>
               <button> Next <FiArrowRight/></button>
          </div>
     );
}