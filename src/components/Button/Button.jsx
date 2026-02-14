import styles from "./Button.module.css";

export default function Button(props) {

    let colorVariant = "";
    let sizeVariantWidth = null;
    let fontSizeVariant = null;

    if (props.variant === "danger") {
        colorVariant = "#e7000b";
    } else if (props.variant === "primary") {
        colorVariant = "#9CA697";
    } else {
        colorVariant = "#F7F5EA";
    }

    if (props.size === "small") {
        sizeVariantWidth = "100px";
        fontSizeVariant = 14

    } else if (props.size === "medium") {
        sizeVariantWidth = "100%";
        fontSizeVariant = 19;
    } else {
        sizeVariantWidth  = "200px";
        fontSizeVariant = 22;
    }

    return (
        <button id={props.id} className={styles.button} onClick={props?.onClick} style={{ backgroundColor: colorVariant, width: sizeVariantWidth, fontSize: fontSizeVariant, color: props.variant === "primary" ? "#ffffff" : "#000000" }}>
            {props.text}
        </button>
    );
}