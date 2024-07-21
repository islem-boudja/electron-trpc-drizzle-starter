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
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-600 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{data}</h1>
        <div className="bg-slate-700 rounded-lg shadow-lg p-6">
          <button
            onClick={handleAddUser}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-6"
          >
            Add User
          </button>
          <div className="space-y-4">
            {users.data?.map((user) => (
              <div
                key={user.id}
                className="bg-slate-600 p-4 rounded-md hover:bg-slate-500 transition duration-300 ease-in-out"
              >
                User created with ID: <span className="font-mono text-yellow-300">{user.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
