import Head from 'next/head'


export default function Home({yorumlar}) {
  return (
    <div>
      <Head>
        <title>Programming Lessons | Homepage</title>
        <meta name='keywords' content="programming, web, development" />
      </Head>
      <h1>Homepage</h1>
      {
        yorumlar.map(yorum => {
          return(
            <div key={yorum.id}>
            <h3>{yorum.name}</h3>
            <h6>{yorum.body}</h6>
            </div>
          )
        })
      }
     
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
  const yorumlar = await res.json()

  return {
    props:{
      yorumlar
    }
  }

}

