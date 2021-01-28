import React from 'react';

const UIButton = ({children}) => {
    return (
        <button style={{width: 200, height: 200, backgroundColor: "red"}}>{children}</button>
    );
};

export default UIButton;