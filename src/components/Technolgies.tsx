import React from 'react';
import { Tag } from 'primereact/tag';

export interface TechnolgiesProps {
  technology?: string;
  severity?:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'secondary'
    | 'contrast';
}

export default function Technolgies({
  technology,
  severity,
}: TechnolgiesProps) {
  return <Tag severity={severity} value={technology}></Tag>;
}
