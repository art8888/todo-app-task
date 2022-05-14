import React from 'react';

import styled from "styled-components";

const Total = styled.div`
  padding-top: 10px;
`;

const Footer = ({total}) => {
    return (
        <footer>
            <Total> &copy; Total: {total} </Total>
        </footer>
    )
};

export default Footer;