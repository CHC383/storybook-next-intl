import type {Preview} from '@storybook/react';
// @ts-ignore
import nextIntl from './nextIntl';

const preview: Preview = {
    initialGlobals: {
        locale: 'en',
        locales: {
            en: {icon: '🇺🇸', title: 'English', right: 'EN'},
            fr: {icon: '🇫🇷', title: 'Français', right: 'FR'},
            ja: {icon: '🇯🇵', title: '日本語', right: 'JP'},
        },
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        nextIntl,
    },
};

export default preview;
