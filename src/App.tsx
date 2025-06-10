import { Container } from "components/Container";
import { Search } from "components/Search";
// import { ThHTMLAttributes } from "react";
// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";

function App() {
  const onSubmit = (text: string) => {
    console.log(`Response nickname is: ${text}`);
  };
  return (
    <>
      <Container>
        <TheHeader />
        <Search hasError onSubmit={onSubmit} />
        <UserCard {...defaultUser} />
      </Container>
    </>
  );
}

export default App;
