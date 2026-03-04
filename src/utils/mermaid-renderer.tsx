import { Mermaid as MdxMermaid } from 'mdx-mermaid/Mermaid';
import React from 'react';

interface MermaidChartProps {
  chart: string;
}

export const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
  if (!chart) {
    return null;
  }
  return React.createElement(MdxMermaid, { chart });
};
