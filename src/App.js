import React from 'react'
import { AppRouter } from './routers/AppRouter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Link as ReactLink } from "react-router-dom";
// import { Breadcrumbs, ResponsiveAppBar } from "./components";
import { Provider as ProviderJotai } from 'jotai';

const queryClient = new QueryClient();

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <ReactLink data-testid="custom-link" ref={ref} to={href} {...other} />;
});
const theme = createTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ProviderJotai>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            {/* <ResponsiveAppBar /> */}
            {/* <Breadcrumbs /> */}
            <AppRouter />
          </SnackbarProvider>
        </ThemeProvider>
      </ProviderJotai>
    </QueryClientProvider>
  )
}

export default App
