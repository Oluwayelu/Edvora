/* eslint-disable @next/next/no-img-element */

const Header = ({ user }) => {
  return (
    <div className="bg-dark-300 w-full px-3 lg:px-10 py-5 flex items-center justify-between text-white">
      <h1 className="text-3xl font-bold">Edvora</h1>

      <div className="inline-flex items-center space-x-3">
        <p>{user.name}</p>
        <img
          src={user.url}
          alt="profile_img"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
