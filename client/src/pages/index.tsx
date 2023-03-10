import Head from "next/head";

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.getProductByID.useQuery({ id: 7 });

  if (hello.isLoading) {
    return <h1>Loading</h1>;
  }

  if (hello.isError) {
    return <h1>There was an Error brother !</h1>;
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello {hello.data && hello.data}</h1>
      </main>
    </>
  );
}
