import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

    const { handleModalClick, handleBebidaIDClick } = useBebidas()

    return (
        <Col md={4} lg={3}>
            <Card className='mb-4'>
                <Card.Img variant='top' src={bebida.strDrinkThumb} alt={`Imagen de ${bebida.strDrink}`}/>
                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    <Button variant='info' className='w-100 text-white text-uppercase mt-2' onClick={() => {
                        handleModalClick()
                        handleBebidaIDClick(bebida.idDrink)
                    }}>
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida