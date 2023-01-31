declare module '@mui/materials/styles';
{
  interface Theme {
    readonly status: {
      readonly danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    readonly neutral: Palette['primary'];
  }
  interface PaletteOptions {
    readonly neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    readonly darker?: string;
  }
  interface SimplePaletteColorOptions {
    readonly darker?: string;
  }
  interface ThemeOptions {
    readonly status: {
      readonly danger: React.CSSProperties['color'];
    };
  }
}
