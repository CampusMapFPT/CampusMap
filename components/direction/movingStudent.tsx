import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StudentIcon from "../assets/image/student.png";



export const MovingStudent = (props: any) => {
    const [locationIndex, setLocationIndex] = useState(0);
    const [duration, setDuration] = useState(1.5);

    const itemList = props.locations;
    let timer;
    useEffect(() => {
        if (locationIndex < itemList.length - 1)
            timer = setTimeout(() => {
                setLocationIndex(locationIndex + 1);
            }, 1500);
    }, [locationIndex]);

    useEffect(() => {
        setDuration(0)
        setLocationIndex(0)
        setTimeout(() => {
            setDuration(1.5)
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
