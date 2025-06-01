// components/TelegramIcon.tsx
import { FC, memo } from 'react';

import Icon, { IconProps } from './Icon';

const TelegramIcon: FC<IconProps> = memo(props => (
    <Icon {...props} >
        <path d="M112.89 22.69a7.11 7.11 0 0 0-7.88-1.16L15.78 60.06c-4.52 1.89-4.26 8.34.39 9.74l22.39 7.3 9.27 30.65a5.62 5.62 0 0 0 9.7 2.05l13.36-14.82 19.94 14.52a5.62 5.62 0 0 0 8.84-3.33l13.2-59.98a7.12 7.12 0 0 0-2.18-6.5zm-11.45 12.1-60.83 45.37-27.85-9.1 88.68-36.27zm-26.48 62.81-22.36-16.29-15.05 16.68-5.85-19.3L99.38 39.8l-24.42 115.8z" />
    </Icon>
));

export default TelegramIcon;
