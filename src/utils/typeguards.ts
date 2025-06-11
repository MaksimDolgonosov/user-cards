import { GithubError, GithubUser } from "types";

export const isGitHubUser = (user: GithubUser | GithubError): user is GithubUser => {
  return "id" in user;
};
