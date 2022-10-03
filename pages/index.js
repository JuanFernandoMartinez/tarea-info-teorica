import Head from 'next/head'
import MealyMachine from '../components/MealyMachine'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="State Machine App" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      
        <MealyMachine/>

      
    </div>
    </ThemeProvider>
    
  )
}
