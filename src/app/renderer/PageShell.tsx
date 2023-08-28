export { PageShell }

import React from 'react'

import type { PageContext } from './types'
import { LayoutApp } from '#@/app/components/LayoutApp'
import { PageContextProvider } from './usePageContext'

import { Providers } from './Providers'

import '#@/app/renderer/Private-App.scss'
import '#@/index/renderer/index.scss'


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
