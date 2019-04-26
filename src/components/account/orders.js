import React from 'react';
// import auth from '../../hoc/auth';

const Orders = props => {
    console.log(props);
    return(
        <div>
        <h1 className="center">My Orders</h1>
        <ul>
            <li>Name: Wicked Thing1</li>
            <li>Phone: Wicked Thing2</li>
            <li>Email: Wicked Thing3</li>
        </ul>
    </div>
    )
}

// export default auth(Orders, 'Prefix made in Orders:');
export default Orders;