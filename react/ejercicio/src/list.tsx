import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [org, setOrg] = React.useState("lemoncode");
  const [debounceOrg] = useDebounce(org, 500);

  let orgUrl = "https://api.github.com/orgs/" + org.toLowerCase() + "/members";

  React.useEffect(() => {
    fetch(orgUrl)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [debounceOrg]);

  if (members.map == null) {
    return (
      <>
        <h2>Hello from List page</h2>

        <button>
          <Link to={"/rick&morty"}>Lista de Rick y Morty</Link>
        </button>

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
          <p>Organizacion no encontrada</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Hello from List page</h2>

        <button>
          <Link to={"/rick&morty/1"}>Lista de Rick y Morty</Link>
        </button>

        <div>
          <input
            type="text"
            value={org}
            onChange={(e) => setOrg(e.target.value)}
          />
        </div>

        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>ID</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  <img src={member.avatar_url} />
                </td>
                <td>
                  <span>{member.id}</span>
                </td>
                <td>
                  <Link to={`/detail/${member.login}`}>{member.login}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
};
