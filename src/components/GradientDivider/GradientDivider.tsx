import React from "react";
import styles from "./GradientDivider.module.scss";
interface GradientDividerProps {
    size?: "xs" | "sm" | "md";
    direction?: "ltr" | "rtl";
}

export const GradientDivider = (props: GradientDividerProps) => {
    const { size = "md", direction = "ltr" } = props;

    const sizeClassName = React.useMemo(() => {
        let className = styles["medium"];

        switch (size) {
            case "xs":
                className = styles["xsmall"];
                break;

            case "sm":
                className = styles["small"];
                break;

            default:
                break;
        }

        return className;
    }, [size]);

    const directionClassName = React.useMemo(() => {
        let className = "";

        switch (direction) {
            case "rtl":
                className = styles["rtl"];
                break;

            default:
                break;
        }

        return className;
    }, [direction]);

    return <div className={`${styles["default"]} ${sizeClassName} ${directionClassName}`} />;
};
