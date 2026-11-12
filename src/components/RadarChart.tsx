import React from 'react';
import { ModelScores } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface RadarChartProps {
  scoresA: ModelScores;
  nameA: string;
  colorA?: string;
  scoresB?: ModelScores;
  nameB?: string;
  colorB?: string;
  size?: number;
}

type MetricKey = keyof ModelScores;

const METRIC_KEYS: MetricKey[] = [
  'reasoning',
  'coding',
  'creativity',
  'speed',
  'multimodal',
  'uzbekAndMultilingual',
  'costEfficiency',
];

export const RadarChart: React.FC<RadarChartProps> = ({
  scoresA,
  nameA,
  colorA = '#4f46e5',
  scoresB,
  nameB,
  colorB = '#0ea5e9',
  size = 380,
}) => {
  const { t } = useLanguage();

  const center = size / 2;
  const radius = size * 0.36;
  const total = METRIC_KEYS.length;
  const angleStep = (Math.PI * 2) / total;

  // Grid levels (20, 40, 60, 80, 100)
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getCoordinates = (value: number, index: number, maxRadius = radius) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const getPolygonPoints = (scores: ModelScores) => {
    return METRIC_KEYS.map((k, i) => {
      const val = scores[k] || 0;
      const { x, y } = getCoordinates(val, i);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[330px] sm:max-w-[360px] h-auto overflow-visible select-none"
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={center} cy={center} r={radius} fill="url(#radarGlow)" />

        {/* Circular grid lines */}
        {levels.map((lvl, lIdx) => {
          const r = radius * lvl;
          const points = METRIC_KEYS.map((_, i) => {
            const angle = i * angleStep - Math.PI / 2;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');

          return (
            <polygon
              key={lIdx}
              points={points}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="1.2"
              strokeDasharray={lvl < 1.0 ? '3,3' : undefined}
            />
          );
        })}

        {/* Axes lines from center */}
        {METRIC_KEYS.map((_, i) => {
          const { x, y } = getCoordinates(100, i);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          );
        })}

        {/* Model B polygon (underneath if present) */}
        {scoresB && (
          <polygon
            points={getPolygonPoints(scoresB)}
            fill={colorB}
            fillOpacity="0.22"
            stroke={colorB}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        )}

        {/* Model A polygon */}
        <polygon
          points={getPolygonPoints(scoresA)}
          fill={colorA}
          fillOpacity="0.28"
          stroke={colorA}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Data points for Model A */}
        {METRIC_KEYS.map((k, i) => {
          const { x, y } = getCoordinates(scoresA[k], i);
          return (
            <circle
              key={`a-${i}`}
              cx={x}
              cy={y}
              r="4.5"
              fill="#ffffff"
              stroke={colorA}
              strokeWidth="2.5"
            />
          );
        })}

        {/* Data points for Model B */}
        {scoresB &&
          METRIC_KEYS.map((k, i) => {
            const { x, y } = getCoordinates(scoresB[k], i);
            return (
              <circle
                key={`b-${i}`}
                cx={x}
                cy={y}
                r="4.5"
                fill="#ffffff"
                stroke={colorB}
                strokeWidth="2.5"
              />
            );
          })}

        {/* Outer Axis labels */}
        {METRIC_KEYS.map((key, i) => {
          const labelDist = radius + 24;
          const angle = i * angleStep - Math.PI / 2;
          const lx = center + labelDist * Math.cos(angle);
          const ly = center + labelDist * Math.sin(angle);

          const label = t.comparePage.scores[key] || key;
          const anchor =
            Math.abs(Math.cos(angle)) < 0.2
              ? 'middle'
              : Math.cos(angle) > 0
              ? 'start'
              : 'end';

          return (
            <text
              key={`label-${key}`}
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              className="text-[11px] font-semibold fill-slate-700"
            >
              {label}
            </text>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3.5 h-3.5 rounded-full shadow-sm"
            style={{ backgroundColor: colorA }}
          />
          <span className="text-sm font-semibold text-slate-800">{nameA}</span>
        </div>
        {scoresB && nameB && (
          <div className="flex items-center gap-2">
            <span
              className="w-3.5 h-3.5 rounded-full shadow-sm"
              style={{ backgroundColor: colorB }}
            />
            <span className="text-sm font-semibold text-slate-800">{nameB}</span>
          </div>
        )}
      </div>
    </div>
  );
};

