import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './Private-App.scss'

import Box from '@mui/material/Box'
import { theme } from '#@/app/components/theme.tsx'

export { LayoutApp }

function LayoutApp({ children }) {

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box
                    sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    style={{ overflowX: 'auto' }}
                >
                    <Box
                        className="p-0"
                        component="main"
                        sx={{ flex: 1, py: 6, px: 4, bgcolor: '#ffffff' }}
                    >
                        {/* Punto de inserción */}
                        LAYOUT INNER APP
                        {children}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
