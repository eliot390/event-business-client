
const StatusModal = ({
  isOpen,
  type = "success",
  title,
  message,
  onClose,
  onConfirm,
  confirmText = "OK"
}) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-cream p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              className={`text-xl font-bold ${
                isSuccess ? "text-sea-green" : "text-red-600"
              }`}
            >
              {title}
            </h2>
            <p className="mt-2  text-gray-600">{message}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label="Close modal"
          >
            x
          </button>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border-2 border-sea-green/10 bg-frozen-water text-sea-green px-4 py-2 text-sm font-semibold cursor-pointer hover:border-2 hover:border-sea-green"
          >
            Close
          </button>

          {onConfirm && (
            <button
              type="button"
              onClick={onConfirm}
              className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
                isSuccess
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusModal;