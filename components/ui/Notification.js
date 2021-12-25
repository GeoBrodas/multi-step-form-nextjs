function Notification({ message }) {
  return (
    <div className="bg-pink-400 text-white font-semibold mx-auto p-4 rounded-lg">
      <p>{message}</p>
    </div>
  );
}

export default Notification;
