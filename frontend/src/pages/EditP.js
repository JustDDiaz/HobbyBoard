import ProfileEdit from "../components/ProfileEdit";

const EditP = () => {
  const user = document.cookie.split("=")[1];
  return (
    <div>
      <ProfileEdit username={user} />
    </div>
  );
};

export default EditP;
