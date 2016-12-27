export const getStateStyles = (theme, props) => {
  if (props.primary) {
    return theme.primary;
  }
  if (props.secondary) {
    return theme.secondary;
  }
  if (props.disabled) {
    return theme.disabled;
  }

  return false;
};