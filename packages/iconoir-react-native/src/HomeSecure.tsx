import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgHomeSecure(
  props: SvgProps,
  svgRef?: React.Ref<React.Component<SvgProps>>
) {
  return (
    <Svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill="none"
      color="currentColor"
      ref={svgRef}
      {...props}
    >
      <Path
        d="M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 01-.6.6H5.6a.6.6 0 01-.6-.6V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 12h.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6v-2.8a.6.6 0 01.6-.6h.4m4 0v-2c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ForwardRef = React.forwardRef(SvgHomeSecure);
export default ForwardRef;
