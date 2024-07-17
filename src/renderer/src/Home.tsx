import { trpc } from './util'

const Home = () => {
  const { data } = trpc.greting.hello.useQuery()
  if (!data) return <div>Loading...</div>
  return <div>{data}</div>
}

export default Home
