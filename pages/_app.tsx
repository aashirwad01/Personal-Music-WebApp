// import '../styles/globals.css'
import {ChakraProvider,extendTheme} from "@chakra-ui/react"
import "reset-css";


const theme = extendTheme({
  colors:{
    gray:{
      100:'#f5f5f5',
      200:'#eeeeee',
      300:'#eoeoeo',
      400:'#bdbdbd',
      500:'#9e9e9e',
      600:'#757575',
      700:'#616161',
      800:'#424242',
      900:'#212121',
    },
  },
  components:{
    Button:{
      variants:{
        link:{
          ':focus':{
            outline:'none',
            boxShadow:'none',
          },
        },
      },
    },
  },
})

const  MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
       <Component {...pageProps} />
    </ChakraProvider>

  )
  
 
}

export default MyApp;
