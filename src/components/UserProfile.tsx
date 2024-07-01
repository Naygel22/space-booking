import { useQuery } from "@tanstack/react-query";
import { getUserDataById } from "../api/getUserDataById";
import { useSessionContext } from "./SessionProvider";
import { Avatar } from "@mui/material";


export const UserProfile = () => {
  const { session } = useSessionContext();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userName'],
    queryFn: () => getUserDataById(session),
    enabled: !!session
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading desks</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="userProfile">
      {data && (
        <>
          <Avatar
            sx={{
              width: 100,
              height: 100
            }}
          >{data ? data[0].name[0] : null}</Avatar>
          <div>
            <div className="oneUserDataBar">
              <div className="label">Name</div>
              <div className="userDataValue">{data[0].name}</div>
            </div>

            <div className="oneUserDataBar">
              <div className="label">Surname</div>
              <div className="userDataValue">{data[0].surname}</div>
            </div>

            <div className="oneUserDataBar">
              <div className="label">Email</div>
              <div className="userDataValue">{data[0].mail}</div>
            </div>

            <div className="oneUserDataBar">
              <div className="label">Phone number</div>
              <div className="userDataValue">{data[0].phonenumber}</div>
            </div>

          </div>
        </>
      )}
    </div>
  );
};
