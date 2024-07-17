import { useState } from 'react'
import { trpc } from './util'
import { ipcLink } from 'electron-trpc/renderer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import {IpcRequest} from "../api";
import Home from './Home'
import { SuperJSON } from 'superjson'
import { loggerLink } from '@trpc/client'

export default function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        ipcLink(),
        loggerLink({
          // Use whatever condition you want here
          enabled: () => true
        })
      ],
      transformer: SuperJSON
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
