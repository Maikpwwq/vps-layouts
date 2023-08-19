export { PageShell }

import React from 'react'

import type { PageContext } from './types'
import { LayoutApp } from '#@/pages/app/components/LayoutApp'
import { PageContextProvider } from './usePageContext'

import { Providers } from './Providers'

import '#@/pages/app/renderer/Private-App.scss'
import '#@/pages/index/renderer/index.scss'


function PageShell({
    children,
    pageContext,
}: {
    children: React.ReactNode
    pageContext: PageContext
}) {
    // const Layout = LayoutPaperbase || pageContext.exports.Layout

    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Providers>
                    <LayoutApp>{children}</LayoutApp>
                </Providers>
            </PageContextProvider>
        </React.StrictMode>
    )
}
