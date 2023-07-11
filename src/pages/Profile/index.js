import { HiOutlineCamera, HiOutlinePencilSquare } from "react-icons/hi2";
import Button from "../../components/Button";
import RenderCards from "../../components/Card";
import user from "../../json/user.json";

export default function Profile() {
  return (
    <div className="container px-10 py-24">
      <div className="grid grid-cols-4 gap-10">
        <div className="relative">
          <div className="sticky top-24 flex flex-col border-r-2 border-light pr-4 dark:border-dark-gray">
            <div className="relative mb-4 aspect-square w-5/6">
              <div className="overflow-hidden rounded-full">
                <img
                  src={user.Profile.profileImg}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className=" absolute bottom-0 right-2 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray/70 duration-300 hover:bg-gray">
                <HiOutlineCamera className="text-xl text-white" />
              </div>
            </div>
            <h3 className="title">{user.Profile.fullName}</h3>
            <p className="italic dark:text-light-gray">@{user.username}</p>
            <p className="my-4">{user.Profile.bio}</p>
            <div className="flex flex-col gap-2">
              <Button isLink title="My Articles" />
              <Button isLink title="Liked Articles" />
              <Button isLink title="Saved Articles" />
              <Button isLink title="Preferences" />
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <h3 className="title mb-4 pl-4">My Articles</h3>
          <div className="grid grid-cols-2 gap-4">
            <RenderCards />
          </div>
        </div>
      </div>
    </div>
  );
}
