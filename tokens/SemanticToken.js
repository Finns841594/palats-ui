import { GlobalToken } from './GlobalToken';

export const SemanticToken = {
  color: {
    background: {
      button: {
        disabled: GlobalToken.colors.greyish[100],
        primary: {
          enabled: GlobalToken.colors.palats[500],
          pressed: GlobalToken.colors.palats[700],
          hover: GlobalToken.colors.palats[600],
        },
        secondary: {
          enabled: GlobalToken.colors.greyish[100],
          pressed: GlobalToken.colors.greyish[200],
          hover: GlobalToken.colors.greyish[700],
        },
      },
    },
    icon: {button:{primary:{enabled:GlobalToken.colors.base.white[500]}}},
    label: {button:{primary:{enabled:GlobalToken.colors.base.white[500]}}},
  },
};
