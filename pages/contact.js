import Head from 'next/head';


const Contact = () => {
  const y = 2;
  return (
    <div>
      <Head>
        <title>Programming Lessons | About</title>
      </Head>
      <h1 className="title">Contact Page</h1>
      <style jsx>
        {`
        .title{
          color: ${y > 3 ? 'yellow' : 'blue'}
        }
        `}
      </style>
    </div>
  );
};

export default Contact;
