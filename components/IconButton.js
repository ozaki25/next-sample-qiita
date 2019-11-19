import { Button, Glyphicon } from 'react-bootstrap';

function IconButton({
  children,
  type,
  disabled,
  className,
  onClick,
  bsStyle,
  bsSize,
  glyph,
}) {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      bsStyle={bsStyle}
      bsSize={bsSize}
    >
      {glyph && <Glyphicon glyph={glyph} />} {children}
    </Button>
  );
}

IconButton.defaultProps = {
  type: 'button',
  disabled: false,
};

export default IconButton;
