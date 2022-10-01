import Head from 'next/head'
import StateMachine from '../components/StateMachine'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="State Machine App" />
        <link rel="icon" href="/favicon.ico" />
        
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"></link>
      </Head>

        
        <StateMachine></StateMachine>

      
    </div>
  )
}
