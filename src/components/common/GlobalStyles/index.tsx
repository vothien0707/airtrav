import './globalStyles.scss';

interface IProps {
  children: React.ReactElement;
}

const GlobalStyles = ({ children }: IProps) => {
  return children;
};

export default GlobalStyles;
