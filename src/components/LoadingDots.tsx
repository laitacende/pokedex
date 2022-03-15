import React from 'react';
import { motion } from "framer-motion"

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2
        }
    },
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const loadingCircleVariants = {
    start: {
        y: "50%"
    },
    end: {
        y: "150%"
    }
};

const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
};

export default function LoadingDots() {
    return (
        <motion.div className={"loading-container"}
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <motion.span className={"loading-circle"}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span className={"loading-circle"}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
            <motion.span className={"loading-circle"}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </motion.div>
    );
}