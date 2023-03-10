import welcomepage from 'images/welcomePage.jpg';
import { WelcomeImage, WelcomeText } from './Home.styled';

export const Home = () => {
  return (
    <>
      <WelcomeText>Welcome to the Phonebook APP</WelcomeText>
      <WelcomeImage src={welcomepage} alt="phonebook" />
    </>
  );
};
