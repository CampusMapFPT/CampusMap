import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};
export const MovingLine = (props: any) => {
    const itemList = props.locations;
    const [pathList, setPathList] = useState("")
    useEffect(() => {
        setPathList(itemList.reduce((finalPath: any, currentPath: any, index: any) => {
            const pathString = finalPath.concat(`${currentPath.location.xRenderValue},${currentPath.location.yRenderValue} `)
            return (index == 0) ? 'M'.concat(pathString) : pathString
        }
            , ''))
    }, [props])

    return (
        <motion.svg
            viewBox="0 0 100 100"
            initial="hidden"
            animate="visible"
            preserveAspectRatio="none">
            <motion.path
                id={'path'}
                d={pathList}
                stroke="#0099ff"
                variants={draw}
            />
        </motion.svg>
    )
}