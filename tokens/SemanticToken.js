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
          enabled: GlobalToken.colors.green[500],
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
      base:{
        background:GlobalToken.colors.greyish[50],
      }
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
        success: GlobalToken.colors.green[200],
        secondary: GlobalToken.colors.palats[200],
        system: GlobalToken.colors.greyish[200],
        danger: GlobalToken.colors.red[200],
      },
    },
  },
};
