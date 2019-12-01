import Link from "next/link";

//import Header from '../components/Header';

//export default function Index() {
  //  return (
    //    <div>
      //      <Header />
        //    <p>Hello Next.js</p>
        //</div>
    //);
//}

import Layout from '../components/MyLayout';

export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    );
}