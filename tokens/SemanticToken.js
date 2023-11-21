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
      },
    },
    icon: {},
    label: {},
  },
};
