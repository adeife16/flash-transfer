import { Button } from "@mui/material";
import { ButtonProps } from "../../types/buttonType";
import "../../index.css"


const SubmitButton = ({
  title,
  backgroundColor,
  color,
  borderRadius,
  startIcon,
  padding,
  disabled,
  boxShadow,
  maxWidth,
  fontSize,
  fontWeight,
  width,
  lineHeight,
  endIcon,
  textTransform,
  margin,
  height,
  border,
  letterSpacing,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      style={{
        borderRadius: borderRadius || 5,
        backgroundColor: backgroundColor || "#fff",
        color: color || "#000",
        height: height,
        width: "100%" || width,

        padding: padding,
        boxShadow: boxShadow,
        maxWidth: maxWidth,
        textTransform: textTransform,
        fontSize: fontSize,
        fontFamily:"Inter !important",
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        border: border,
        letterSpacing: letterSpacing,
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:"Inter !important",
        margin: margin,
      }}
      type="submit"
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      onClick={onClick}
      
    >
      {title}
    </Button>
  );
};

export default SubmitButton;
