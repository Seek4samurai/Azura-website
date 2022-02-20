import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={84}
    height={821}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M42 0v921" stroke="#8D8D8D" strokeWidth={2} />
    <circle cx={42} cy={410} r={7} fill="#C4C4C4" />
    <circle cx={42} cy={410} r={30} stroke="#C4C4C4" strokeWidth={2} />
  </svg>
);

export default SvgComponent;
