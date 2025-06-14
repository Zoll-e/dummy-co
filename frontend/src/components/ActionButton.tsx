type ActionButtonProps = {
  title: string;
  onClick: () => void;
};

function ActionButton({ title, onClick }: ActionButtonProps) {
  return (
    <button
      className="bg-gray-900 py-2 px-4 mx-auto hover:cursor-pointer hover:bg-transparent hover:text-gray-900 border-2 border-gray-900  rounded-2xl text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ActionButton;
