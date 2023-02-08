/* eslint-disable no-lone-blocks, @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars */

declare module '@mui/materials/styles';
{
  interface Theme {
    readonly status: {
      readonly danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    // @ts-ignore
    readonly neutral: Palette['primary'];
  }
  interface PaletteOptions {
    // @ts-ignore
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
