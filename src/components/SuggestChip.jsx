import React from 'react';
import {Icon, Txt} from '../lib/ui.jsx';

export const SuggestChip = ({children, sparkle}) => (
  <div style={{background: '#fff', border: '1px solid #d9d9d9', borderRadius: 999, padding: '12px 22px', display: 'flex', alignItems: 'center', gap: 8}}>
    {sparkle && <Icon n="msparkle.svg" w={18} />}
    <Txt size={18} weight={500} color="#555">{children}</Txt>
  </div>
);
