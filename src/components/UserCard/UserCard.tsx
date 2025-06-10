import { LocalGithubUser } from "types";
import styles from "./UserCard.module.scss";
import { UserStat, UserStatProps } from "components/UserStat";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>
      <UserStat repos={props.repos} followers={props.followers} following={props.following} />
    </div>
  );
};
