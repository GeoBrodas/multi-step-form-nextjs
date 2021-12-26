function Notification({ message }) {
  return (
    <div className="bg-pink-400 mx-auto w-3/4 md:w-auto text-white font-semibold p-2 md:p-4 rounded-lg">
      <p>{message}</p>
    </div>
  );
}

export default Notification;
