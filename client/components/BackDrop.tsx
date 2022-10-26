import * as React from 'react';
export const BackDrop = ({
  visible = false,
  onClick = () => {},
}: {
  visible: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: '#',
        display: visible ? 'block' : 'none',
        position: 'absolute',
        background: 'rgba(8,8,8,0.69)',
      }}
      onClick={onClick}
    ></div>
  );
};
