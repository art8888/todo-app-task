import React from 'react';

import { Total } from './FooterCss';

const Footer = ({total}) => {
    return (
        <footer>
            <Total> &copy; Total: {total} </Total>
        </footer>
    )
};

export default Footer;