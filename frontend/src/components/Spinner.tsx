function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-2">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />
    </div>
  );
}

export default Spinner;
