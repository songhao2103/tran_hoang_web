import UserOptions from "../user-options";

const AdminHeader = () => {
  return (
    <div className="flex items-center justify-end px-10 w-full py-2 sticky top-0 bg-white border-b">
      <UserOptions />
    </div>
  );
};

export default AdminHeader;
