import { FC, memo } from 'react';

import Icon, { IconProps } from './Icon';

const DevIcon: FC<IconProps> = memo((props) => (
    <Icon {...props}>
        <path d="M30.03 52.07c-0.97-0.72-1.94-1.09-2.91-1.09H22.76v26.12h4.36c0.97 0 1.94-0.36 2.91-1.09s1.46-1.81 1.46-3.27v-17.41c-0.00-1.45-0.49-2.54-1.46-3.27zM101.03 8H10.97C4.92 8 0.02 12.9 0 18.95v90.1C0.02 115.1 4.92 120 10.97 120h90.05c6.05 0 10.96-4.9 10.97-10.95V18.95c-0.02-6.05-4.92-10.95-10.97-10.95zM38.55 72.8c0 4.7-2.9 11.83-12.09 11.81h-11.6V43.24h11.85c8.86 0 11.84 7.12 11.84 11.82zm25.17-22.16H50.4v9.61h8.14v7.39H50.4v9.6h13.32v7.39H48.18c-2.79 0.07-5.11-2.13-5.18-4.92V48.42c-0.06-2.79 2.14-5.1 4.93-5.17h15.8zm25.91 28.82c-3.3 7.69-9.21 6.16-11.86 0l-9.63-36.2h8.14l7.43 28.43 7.39-28.43h8.14z" />
    </Icon>
));

export default DevIcon;
