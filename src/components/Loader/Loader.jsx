import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';
import { ContainerLoader } from './Loader.styled';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContainerLoader>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
      )}
    </ContainerLoader>
  );
};
