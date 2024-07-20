import { trpc } from './util'

const Home = () => {
  const { data } = trpc.greting.hello.useQuery()
  const userMutate = trpc.greting.createUser.useMutation()
  const users = trpc.greting.getUsers.useQuery()
  const utils = trpc.useUtils()
  const handleAddUser = async () => {
    const result = await userMutate.mutateAsync()
    await utils.greting.getUsers.invalidate()
    console.log(result)
  }
  if (!data) return <div>Loading...</div>
  return (
    <div className=" bg-slate-600">
      <h1>{data}</h1>
      <div>
        <button onClick={handleAddUser}>add user</button>
        <div>{users.data?.map((user) => <div key={user.id}>{user.textModifiers}</div>)}</div>
      </div>
    </div>
  )
}

export default Home
