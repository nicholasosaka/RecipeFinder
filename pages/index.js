// This is the Link API
import Link from 'next/link';
import Header from '../components/Header';

import Layout from '../components/MyLayout';

export default function Index() {
    return (
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    );
}


//export default function Index() {
  //  return (
    //    <div>
     //       <Header />
       //     <p>Hello Next.js</p>
        //</div>
    //);
//}

//const Index = () => (
  //  <div>
    //    <Link href="/about" title="About Page">
      //      <a>About Page</a>
        //</Link>
        //<p>Hello Next.js</p>
    //</div>
//);

//export default Index;
