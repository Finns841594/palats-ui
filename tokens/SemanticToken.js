import { GlobalToken } from './GlobalToken';

export const SemanticToken = {
  color: {
    background: {
      surface: {
        primary: GlobalToken.colors.greyish[950],
        success: GlobalToken.colors.green[50],
        danger: GlobalToken.colors.red[50],
      },
      button: {
        success: {
          enabled: GlobalToken.colors.green[200],
          pressed: GlobalToken.colors.green[700],
          hover: GlobalToken.colors.green[100],
        },
        secondary: {
          enabled: GlobalToken.colors.palats[200],
          pressed: GlobalToken.colors.palats[800],
          hover: GlobalToken.colors.palats[100],
        },
        disabled: {
          disabled: GlobalToken.colors.greyish[100],
        },
        system: {
          selected: GlobalToken.colors.greyish[800],
          pressed: GlobalToken.colors.greyish[800],
          hover: GlobalToken.colors.greyish[800],
          enabled: GlobalToken.colors.greyish[200],
        },
        danger: {
          enabled: GlobalToken.colors.red[50],
          pressed: GlobalToken.colors.red[900],
          hover: GlobalToken.colors.red[100],
        },
        primary: {
          enabled: GlobalToken.colors.palats[500],
          pressed: GlobalToken.colors.palats[700],
          hover: GlobalToken.colors.palats[600],
        },
      },
    },
    text: {
      surface: {
        primary: GlobalToken.colors.greyish[700],
        secondary: GlobalToken.colors.greyish[950],
        success: GlobalToken.colors.green[700],
        danger: GlobalToken.colors.red[700],
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
        primary: {
          enabled: GlobalToken.colors.white[500],
        },
        success: {
          enabled: GlobalToken.colors.white[500],
        },
        secondary: {
          enabled: GlobalToken.colors.white[500],
        },
        system: {
          selected: GlobalToken.colors.greyish[950],
          pressed: GlobalToken.colors.greyish[950],
          hover: GlobalToken.colors.greyish[950],
          enabled: GlobalToken.colors.greyish[500],
        },
        danger: {
          enabled: GlobalToken.colors.white[500],
        },
        disabled: {
          disabled: GlobalToken.colors.greyish[600],
        },
      },
    },
    label: {
      button: {
        primary: {
          enabled: GlobalToken.colors.white[500],
        },
        success: {
          enabled: GlobalToken.colors.white[500],
        },
        secondary: {
          enabled: GlobalToken.colors.white[500],
        },
        system: {
          selected: GlobalToken.colors.greyish[200],
          pressed: GlobalToken.colors.greyish[200],
          hover: GlobalToken.colors.greyish[100],
          enabled: GlobalToken.colors.greyish[200],
        },
        danger: {
          enabled: GlobalToken.colors.white[500],
        },
        disabled: {
          disabled: GlobalToken.colors.greyish[600],
        },
      },
    },
    border: {
      surface: {
        primary: GlobalToken.colors.greyish[400],
        danger: GlobalToken.colors.red[700],
        success: GlobalToken.colors.green[700],
      },
      button: {
        success: {
          enabled: GlobalToken.colors.green[50],
        },
        secondary: {
          enabled: GlobalToken.colors.palats[50],
        },
        system: {
          enabled: GlobalToken.colors.greyish[200],
        },
        danger: {
          enabled: GlobalToken.colors.red[200],
        },
      },
    },
  },
};
