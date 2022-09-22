
import Layout from '../components/layout';
import PageProvider from '../components/pageContext';
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {
  return (
      <PageProvider>   
        <Layout>
          <Component {...pageProps} />
        </Layout>     
      </PageProvider>
      
        
      
  )
}

export default MyApp
