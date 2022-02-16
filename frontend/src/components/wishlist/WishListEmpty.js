
import { StyledWishlistEmpty, Container, Button } from './styledWishlistEmpty';

import { Link } from 'react-router-dom';

function WishlistEmpty() {
    return (
        <StyledWishlistEmpty>
            <Container>
                <div>YOUR WISHLIST IS EMPTY</div>
                <div>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</div>
                <img src="https://myntra-clone-theta.vercel.app/assets/wishlist_empty.png" alt="" />
                <Button>
                    <Link to='/products'>CONTINUE SHOPPING</Link>
                </Button>
            </Container>
        </StyledWishlistEmpty>
    )
}

export default WishlistEmpty