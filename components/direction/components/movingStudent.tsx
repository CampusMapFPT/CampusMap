import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StudentIcon from "../../assets/image/student.png";

const calculateDistance = (point1: any, point2: any) => {
    return Math.sqrt(Math.pow((point2.xRenderValue * 1.0 - point1.xRenderValue * 1.0), 2)
        + Math.pow((point2.yRenderValue * 1.0 - point1.yRenderValue * 1.0), 2))
}

export const MovingStudent = (props: any) => {
    const [locationIndex, setLocationIndex] = useState(0);
    const [duration, setDuration] = useState(0.5);


    const itemList = props.locations;

    useEffect(() => {
        if (locationIndex < itemList.length - 1) {
            setTimeout(() => {
                setLocationIndex(locationIndex + 1);
            }, 500);
        }
    }, [locationIndex]);

    useEffect(() => {
        setDuration(0)
        setLocationIndex(0)
        setTimeout(() => {
            setDuration(0.5)
        }, 1);

    }, [props.locations])



    return (
        <motion.img
            className="moving-student"
            src={StudentIcon.src}
            initial={itemList && {
                top: `${itemList[0].location.yRenderValue}%`,
                left: `${itemList[0].location.xRenderValue}%`
            }}
            animate={itemList[locationIndex] && {
                top: `${itemList[locationIndex].location.yRenderValue}%`,
                left: `${itemList[locationIndex].location.xRenderValue}%`
            }}
            transition={{ duration: duration, ease: "linear" }} />
    );
};
