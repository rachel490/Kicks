import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: string;
      text: string;
      text_white: string;
      msg_bg: string;
      nav_bg: string;
      nav_active_bg: string;
    };
    style: {
      border_light: string;
      edge_padding: string;
      header_height: string;
      nav_height: string;
    };
  }
}
