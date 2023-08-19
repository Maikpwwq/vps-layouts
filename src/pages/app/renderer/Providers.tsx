import React, { useState } from "react";
// TODO: activate @tanstack/react-query
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // Hydrate,
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import { SendbirdProvider } from '@sendbird/uikit-react' // withSendBird,
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import "@sendbird/uikit-react/dist/index.css";
// import es from 'date-fns/locale/es'

export { Providers };

let appId = "";
let accessToken = "";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const userAuthID = ""; // Este es el id de la cuenta de Auth
  const userAuthName = ""; // Este es el id de la cuenta de Auth
  // const queryClient = new QueryClient()
  // const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <SendbirdProvider
        appId={appId} // Sendbird application ID.
        userId={userAuthID} // user Auth ID.
        nickname={userAuthName} // user Auth Name.
        accessToken={accessToken}
        // dateLocale={es}
        // {...props}
      >
        {/* <Hydrate state={pageProps.dehydratedState}></Hydrate> */}
        {children}
        {/* <ReactQueryDevtools initialIsOpen /> */}
      </SendbirdProvider>
      {/* </QueryClientProvider> */}
    </>
  );
};
