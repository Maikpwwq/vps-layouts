import React from 'react'
import type { PageContext } from './types'
// import './PageShell.css'
import { PageContextProvider } from './usePageContext'
// import { Link } from './Link'
import { Layout } from '#@/index/components/Layout'

import './App.scss'
import './index.scss'

export { PageShell }


function PageShell({
    children,
    pageContext,
}: {
    children: React.ReactNode
    pageContext: PageContext
}) {


    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Layout>{children}</Layout>
            </PageContextProvider>
        </React.StrictMode>
    )
}
