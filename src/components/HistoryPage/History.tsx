import React from "react";
import { Link } from "react-router-dom";
import userDataApi from "../../store/API/UserDataAPI";

export default function History() {
  const TOKEN = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const { data, refetch } = userDataApi.useFetchUsersHistoryQuery(
    { username, TOKEN },
    { refetchOnMountOrArgChange: true },
  );
  const [deleteUsersHistory] = userDataApi.useDeleteUsersHistoryMutation();
  const removeHistory = () => {
    deleteUsersHistory({ req: { username }, TOKEN });
    refetch();
  };

  return (
    <div className="container pt-4">
      <div className="row">
        <div className="col-xl-2" />
        <div className="col-xl-8">
          <ul>
            {data?.map((story) => (
              <li key={story.id}>
                <Link to={story.link}>
                  {story.query}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-xl-2">
          <button
            type="button"
            className="btn btn-steelblue"
            onClick={removeHistory}
          >
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
}
