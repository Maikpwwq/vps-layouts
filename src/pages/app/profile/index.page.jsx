export { Page }

// Pagina de Usuario - Perfil
import React from 'react'
import { usePageContext } from '#@/pages/app/renderer/usePageContext';
// react-bootrstrap
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { Link } from '#@/pages/app/renderer/Link';

const Page = () => {
    const pageContext = usePageContext();
    let id = pageContext.routeParams['*']; // pageContext.routeParams.id
    console.log('routeParamsPerfil', id);

    const handleClick=(()=>{
        console.log('click');
    });

    return (
        <>
            <Container fluid className="p-0">
                <Row className="h-100 pt-4 pb-4">
                    <Button onClick={handleClick}>Navigate</Button>
                    <Link href="/"> Home </Link>
                </Row>
            </Container>
        </>
    )
}
