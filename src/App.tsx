import { Container } from "components/Container";
import { Search } from "components/Search";
// import { ThHTMLAttributes } from "react";
// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extract-local-user";
import { isGitHubUser } from "utils/typeguards";
const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const onSubmit = async (username: string) => {
    const res = await fetch(BASE_URL + username.trim());
    const data = (await res.json()) as GithubUser | GithubError;

    if (isGitHubUser(data)) {
      const newUser: LocalGithubUser = extractLocalUser(data);
      setUser(newUser);
    } else {
      setUser(null);
    }
  };

  return (
    <>
      <Container>
        <TheHeader />
        <Search hasError={!user} onSubmit={onSubmit} />
        {user && <UserCard {...user} />}
      </Container>
    </>
  );
}

export default App;
