
import "../../font.css/index.css"

export interface AppdropDownProps {
  value?: any;
  options: {
    label?: string;
    value?: string;
  }[];
  onChange?: (event?: any) => void;
  maxWidth?: any;
  fontSize?: any;
  fontWeight?: any;
  lineHeight?: any;
  margin?: any;
  padding?: any;
  border?: string;
  width?: string;
  backgroundColor?: any;

}

const AppdropDown = ({
  value,
  options,
  onChange,
  maxWidth,
  fontSize,
  fontWeight,

  width,
  lineHeight,
  margin,
  border,
  padding,
  backgroundColor
}: AppdropDownProps) => {
  return (
    <>
      <label>
        <select
          value={value}
          onChange={onChange}
          style={{
            border: "1px solid #D1D5DB" || border,
            width: "100%" || width,
            maxWidth: "100%" || maxWidth,
            fontSize: fontSize,
            fontWeight: fontWeight,
            backgroundColor: backgroundColor,
            lineHeight: lineHeight,
            margin: margin,
            borderRadius: "6px",
            padding: "9px 13px" || padding
          }}
        >
          {options.map((option) => (
            <option value={option.value} key={Math.random()} >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default AppdropDown;
