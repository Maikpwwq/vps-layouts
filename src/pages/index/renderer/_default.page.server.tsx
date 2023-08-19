export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'routeParams']

import { renderToString } from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {

    let pageHtml

    if (!pageContext.Page) {
        // SPA
        pageHtml = ''
    } else {
        // SSR / HTML-only
        const { Page, pageProps } = pageContext
        // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
        // if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
        // console.log('pageIndexContextServer', Page, pageProps)
        const page = (
            <PageShell pageContext={pageContext}>
                <Page {...pageProps} />
            </PageShell>
        )

        pageHtml = renderToString(page)

    }

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext.exports
    const title = (documentProps && documentProps.title) || 'vite-ssr-ts-layouts'

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"
        />
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    }
}
