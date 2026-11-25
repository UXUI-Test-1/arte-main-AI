import React from 'react';
import {Icon, Txt} from '../lib/ui.jsx';

export const Crumb = ({items}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
    {items.map((t, i) => (
      <React.Fragment key={t + i}>
        {i > 0 && <Icon n="ui.svg" w={12} />}
        <Txt size={16} weight={500} color="#555" ls={-0.32} lh={1.5}>{t}</Txt>
      </React.Fragment>
    ))}
  </div>
);
