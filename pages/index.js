import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Message from "@/components/message.js";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    })();
  }, []);

  const transformedUsers = useMemo(() => {
    if (!searchText.trim()) return users;

    const lowerCaseSearchText = searchText.trim().toLowerCase();

    return users.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(lowerCaseSearchText) ||
        email.toLowerCase().includes(lowerCaseSearchText)
    );
  }, [users, searchText]);

  function onSearchTextChange(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Test App</title>
        <meta name="description" content="Next.js Test App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Users</h1>
        <Message message="This is a test" />
        <div className="field">
          <label>Search Text:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {transformedUsers.map(({ id, name, email }, index) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
