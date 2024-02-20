import { FaTruckMoving } from "react-icons/fa";
import { TbCoin } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";


const specialFeature = [

    {
        id : 1,
        icon : <FaTruckMoving />,
        title : "Free Delivery",
        slug : "Orders from all items"
    },
    {
        id : 2,
        icon : <TbCoin />,
        title : "Return & Refund",
        slug : "Money back guarantee"
    },
    {
        id : 3,
        icon : <CiDiscount1 />,
        title : "Member Discount",
        slug : "On order over $99"
    },
    {
        id : 4,
        icon : <MdOutlineSupportAgent />,
        title : "Support 24/7",
        slug : "Contact us 24 hours a day"
    },
];

export {specialFeature};