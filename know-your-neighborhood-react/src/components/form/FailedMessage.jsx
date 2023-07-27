const FailedMessage = ({ children, onClose }) => {
  return (
    <div
      className="
      flex justify-between items-center py-3 px-6 w-full rounded-sm mb-2
      text-red-500 bg-red-200 border border-red-500"
    >
      <p>{children}</p>
      <i className="fa-regular fa-x cursor-pointer pl-3" onClick={onClose}></i>
    </div>
  );
};

export default FailedMessage;
