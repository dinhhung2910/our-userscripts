const getDataFromDOM = (elm) => {
  const propsKey = Object.keys(elm).find((en) => en.includes('reactProp'));
  if (!propsKey) {
    return null;
  }
  return elm[propsKey].children.props.children.props;
};

export default getDataFromDOM;
