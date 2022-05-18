import { ArrowLeft } from "phosphor-react";

interface ReturnButtonProps {
  onFeedbackRestartRequested: () => void;
}

export function ReturnButton(props: ReturnButtonProps) {
  return (
    <button
      type="button"
      className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
      onClick={props.onFeedbackRestartRequested}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}
