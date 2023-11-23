import { GlobalToken } from './GlobalToken';

export const SemanticToken = {
  color: {
    background: {
      surface: {
        primary: GlobalToken.colors.base[500],
        success: GlobalToken.colors.green[50],
        danger: GlobalToken.colors.red[50],
      },
      button: {
        success: {
          pressed: GlobalToken.colors.green[100],
          hover: GlobalToken.colors.green[50],
          enabled: GlobalToken.colors.base.white[500],
        },
        secondary: {
          enabled: GlobalToken.colors.base.white[500],
          pressed: GlobalToken.colors.palats[100],
          hover: GlobalToken.colors.palats[50],
        },
        disabled: {
          disabled: GlobalToken.colors.greyish[100],
        },
        system: {
          selected: GlobalToken.colors.greyish[200],
          pressed: GlobalToken.colors.greyish[200],
          hover: GlobalToken.colors.greyish[100],
          enabled: GlobalToken.colors.base.white[500],
        },
        danger: {
          pressed: GlobalToken.colors.red[100],
          hover: GlobalToken.colors.red[50],
          enabled: GlobalToken.colors.base.white[500],
        },
        primary: {
          pressed: GlobalToken.colors.palats[700],
          hover: GlobalToken.colors.palats[600],
          enabled: GlobalToken.colors.palats[500],
        },
      },
      base: {
        background: GlobalToken.colors.greyish[50],
      },
    },
    text: {
      surface: {
        primary: GlobalToken.colors.greyish[950],
        secondary: GlobalToken.colors.greyish[700],
        success: GlobalToken.colors.green[950],
        danger: GlobalToken.colors.red[950],
      },
    },
    icon: {
      surface: {
        primary: GlobalToken.colors.greyish[950],
        secondary: GlobalToken.colors.greyish[700],
        success: GlobalToken.colors.green[700],
        danger: GlobalToken.colors.red[700],
      },
      button: {
        primary: GlobalToken.colors.base.white[500],
        success: GlobalToken.colors.green[700],
        secondary: GlobalToken.colors.palats[800],
        system: {
          selected: GlobalToken.colors.greyish[800],
          pressed: GlobalToken.colors.greyish[800],
          hover: GlobalToken.colors.greyish[800],
          enabled: GlobalToken.colors.greyish[500],
        },
        danger: GlobalToken.colors.red[900],
        disabled: GlobalToken.colors.greyish[600],
      },
    },
    label: {
      button: {
        primary: GlobalToken.colors.base.white[500],
        success: GlobalToken.colors.green[700],
        secondary: GlobalToken.colors.palats[800],
        system: {
          selected: GlobalToken.colors.greyish[950],
          pressed: GlobalToken.colors.greyish[950],
          hover: GlobalToken.colors.greyish[950],
          enabled: GlobalToken.colors.greyish[950],
        },
        danger: GlobalToken.colors.red[900],
        disabled: GlobalToken.colors.greyish[600],
      },
    },
    border: {
      surface: {
        primary: GlobalToken.colors.greyish[400],
        danger: GlobalToken.colors.red[700],
        success: GlobalToken.colors.green[700],
      },
      button: {
        primary: 'transparent',
        disabled: 'transparent',
        success: GlobalToken.colors.green[200],
        secondary: GlobalToken.colors.palats[200],
        system: GlobalToken.colors.greyish[200],
        danger: GlobalToken.colors.red[200],
      },
    },
  },
  font: {
    fontFamily: '"Open Sans"',
    fontSize: {
      text: {
        lg: [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '1.5rem',
          },
        ],
        'lg-link': [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '1.5rem',
          },
        ],
        md: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.25rem',
          },
        ],
        'md-link': [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.25rem',
            textDecoration: 'underline',
          },
        ],
      },
      caption: {
        sm: [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '1.125rem',
          },
        ],
        'sm-link': [
          '0.75rem',
          {
            fontWeight: '400',
            lineHeight: '1.125rem',
            textDecoration: 'underline',
          },
        ],
      },
      menu: {
        md: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.5rem',
          },
        ],
        'md-selected': [
          '0.875rem',
          {
            fontWeight: '600',
            lineHeight: '1.5rem',
            letterSpacing: '-0.00875rem',
          },
        ],
      },
      button: {
        md: [
          '0.875rem',
          {
            fontWeight: '600',
            lineHeight: '1.5rem',
            letterSpacing: '-0.00875rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '1.5rem',
            letterSpacing: '-0.00875rem',
          },
        ],
      },
      headline: {
        '2xl': [
          '1.875rem',
          {
            fontWeight: '600',
            lineHeight: '2.25rem',
          },
        ],
        '2xl-light': [
          '1.875rem',
          {
            fontWeight: '400',
            lineHeight: '2.25rem',
          },
        ],
        xl: [
          '1.5rem',
          {
            fontWeight: '600',
            lineHeight: '2rem',
          },
        ],
        'xl-light': [
          '1.5rem',
          {
            fontWeight: '400',
            lineHeight: '2rem',
          },
        ],
        lg: [
          '1.25rem',
          {
            fontWeight: '600',
            lineHeight: '1.75rem',
          },
        ],
        md: [
          '1rem',
          {
            fontWeight: '700',
            lineHeight: '1.5rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            fontWeight: '700',
            lineHeight: '1.25rem',
          },
        ],
      },
      labels: {
        lg: [
          '1rem',
          {
            fontWeight: '600',
            lineHeight: '1.5rem',
            letterSpacing: '0.05rem',
          },
        ],
        md: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.25rem',
          },
        ],
      },
      input: {
        md: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.5rem',
          },
        ],
      },
      tabs: {
        md: [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '1.25rem',
          },
        ],
      },
      table: {
        md: [
          '0.875rem',
          {
            fontWeight: '400',
            lineHeight: '1.25rem',
          },
        ],
        'md-highlighted': [
          '0.875rem',
          {
            fontWeight: '500',
            lineHeight: '1.25rem',
          },
        ],
      },
    },
    textDecoration: {
      text: {
        'lg-link': { textDecoration: 'underline' },
        'md-link': { textDecoration: 'underline' },
      },
      caption: {
        'sm-link': { textDecoration: 'underline' },
      },
      labels: {
        lg: { 'text-transform': 'uppercase' },
        md: { 'text-transform': 'uppercase' },
      },
    },
  },
  shadow: {
    surface: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
};
