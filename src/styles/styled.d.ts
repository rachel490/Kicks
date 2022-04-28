import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
    color: {
      text: string;
      nav_bg: string;
      nav_active_bg: string;
    };
    style: {
      border_light: string;
    };
  }
}