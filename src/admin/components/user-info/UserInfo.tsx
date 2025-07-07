import { type IUser } from "./userInfo.type";
import avaDefault from "../../../assets/images/defaults/user-avatar-male-5.png";

const UserInfo = ({ user }: { user?: IUser }) => {
  return (
    <div className="flex items-center gap-x-4">
      <img
        src={user?.avatar || avaDefault}
        alt="ava"
        className="w-8 h-8 rounded-full flex-shrink-0"
      />
      <p className="text-sm">{user?.userName || "Ẩn danh"}</p>
    </div>
  );
};

export default UserInfo;
