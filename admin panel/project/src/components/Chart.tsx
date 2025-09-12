import React from 'react';

interface ChartProps {
  data: number[];
  labels?: string[];
  type?: 'bar' | 'line' | 'area';
  height?: number;
  color?: string;
  className?: string;
}

export default function Chart({ 
  data, 
  labels, 
  type = 'bar', 
  height = 200, 
  color = '#3B82F6',
  className = '' 
}: ChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  const normalizeValue = (value: number) => {
    if (range === 0) return 0.5;
    return (value - minValue) / range;
  };

  const renderBar = (value: number, index: number) => {
    const normalizedHeight = normalizeValue(value);
    const barHeight = normalizedHeight * (height - 40);
    
    return (
      <div key={index} className="flex flex-col items-center flex-1">
        <div 
          className="w-full bg-gray-200 rounded-t-md flex items-end justify-center relative group cursor-pointer transition-all duration-200 hover:opacity-80"
          style={{ height: height - 20 }}
        >
          <div
            className="w-full rounded-t-md transition-all duration-300 hover:brightness-110"
            style={{ 
              height: `${barHeight}px`,
              backgroundColor: color,
              minHeight: '2px'
            }}
          />
          
          {/* Tooltip */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {value}
          </div>
        </div>
        
        {labels && labels[index] && (
          <div className="text-xs text-gray-600 mt-2 text-center truncate w-full">
            {labels[index]}
          </div>
        )}
      </div>
    );
  };

  const renderLine = () => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = (1 - normalizeValue(value)) * 80 + 10;
      return `${x},${y}`;
    }).join(' ');

    return (
      <div className="relative" style={{ height }}>
        <svg width="100%" height="100%" className="overflow-visible">
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
            className="drop-shadow-sm"
          />
          
          {data.map((value, index) => {
            const x = (index / (data.length - 1)) * 100;
            const y = (1 - normalizeValue(value)) * 80 + 10;
            
            return (
              <circle
                key={index}
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill={color}
                className="cursor-pointer hover:r-6 transition-all duration-200"
              >
                <title>{value}</title>
              </circle>
            );
          })}
        </svg>
        
        {labels && (
          <div className="flex justify-between mt-2">
            {labels.map((label, index) => (
              <div key={index} className="text-xs text-gray-600 text-center">
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderArea = () => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = (1 - normalizeValue(value)) * 80 + 10;
      return `${x},${y}`;
    }).join(' ');

    const areaPoints = `0,90 ${points} 100,90`;

    return (
      <div className="relative" style={{ height }}>
        <svg width="100%" height="100%" className="overflow-visible">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          <polygon
            fill="url(#areaGradient)"
            points={areaPoints}
          />
          
          <polyline
            fill="none"
            stroke={color}
            strokeWidth="2"
            points={points}
            className="drop-shadow-sm"
          />
        </svg>
        
        {labels && (
          <div className="flex justify-between mt-2">
            {labels.map((label, index) => (
              <div key={index} className="text-xs text-gray-600 text-center">
                {label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`p-4 ${className}`}>
      {type === 'bar' && (
        <div className="flex items-end space-x-1" style={{ height }}>
          {data.map((value, index) => renderBar(value, index))}
        </div>
      )}
      
      {type === 'line' && renderLine()}
      {type === 'area' && renderArea()}
    </div>
  );
}