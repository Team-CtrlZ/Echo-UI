export interface ColorTokens {
  violet50: string;
  violet100: string;
  violet500: string;
  violet700: string;
  white: string;
  black: string;
}

export interface SemanticColors {
  primary: {
    default: string;
    hover: string;
    text: string;
  };
  text: {
    default: string;
    subdued: string;
  };
}

export interface ComponentColors {
  button: {
    bg: {
      default: string;
      hover: string;
    };
    text: string;
  };
}

export interface Theme {
  fontFamily: string;
  colors: {
    tokens: ColorTokens;
    semantic: SemanticColors;
    components: ComponentColors;
  };
}
