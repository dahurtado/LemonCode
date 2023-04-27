import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from 'use-debounce';

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}


export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [org, setOrg] = React.useState("lemoncode");
  const [debounceOrg] = useDebounce(org, 1000);

  console.log(org);
  let orgUrl = "https://api.github.com/orgs/" + org + "/members";

  React.useEffect(() => {
    console.log(orgUrl);

    fetch(orgUrl)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [debounceOrg]);

  return (
    <>
      <h2>Hello from List page</h2>+{" "}

      <div>
        <input 
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </div>

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
