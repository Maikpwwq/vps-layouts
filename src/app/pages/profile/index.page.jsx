export { Page }

// Set the Layout for all `/app/**/*.page.js`
export { LayoutApp as Layout} from '#@/app/components/LayoutApp'

// Pagina de Usuario - Perfil
import React from 'react'
import { usePageContext } from '#@/index/renderer/usePageContext';
// react-bootrstrap
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { Link } from '#@/index/renderer/Link';

const Page = () => {
    const pageContext = usePageContext();
    let id = pageContext.routeParams['*']; // pageContext.routeParams.id
    console.log('routeParamsPerfil', id);

    return (
        <>
            <Container fluid className="p-0">
                <Row className="h-100 pt-4 pb-4">
                    <Link href="/"> Visit Home </Link>
                </Row>
            </Container>
        </>
    )
}
