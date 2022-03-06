import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "../components/nav";
import CourseLayout from "../layouts/htmlLayout";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout
  return (
    <div>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
  );
}

const EmptyLayout =({children})=><>{children} </>

export default MyApp;
