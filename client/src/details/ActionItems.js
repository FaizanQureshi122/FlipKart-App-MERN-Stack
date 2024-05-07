import React from 'react'

import { Box , Button , styled} from  '@mui/material'
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { useState } from 'react';

// import { payUsingPaytm } from '../../service/api';
// import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)`
 min-width: 40%;
 padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    padding: '15px',
});
const StyledButton = styled(Button)`
 width: 46%;
 height: 50px;
 border-radius: 2px;
`


const ActionItems = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const { id } = product;
    
    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    return (
    
              <LeftContainer>
           <Box style={{ padding: '15px 20px' , border: '1px solid #f0f0f0f', width: '95%'}}>
            <Image src={product.detailUrl} /><br />
           </Box>
           
            <StyledButton onClick={() => addItemToCart()}  style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton    style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>

    
  )
}

export default ActionItems
