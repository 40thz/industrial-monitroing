import { COLORS } from "@/constants/colors";

export const CustomContent = (props: any) => {
    const { root, depth, x, y, width, height, index, uv } = props;
   
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? COLORS.blue[Math.floor((index / root.children.length) * 6)] : 'red',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width - 30} y={y + height - 10} textAnchor="middle" fill="#fff" fontSize={14}>
            {uv}%
          </text>
        ) : null}
      </g>
    );
  };
  