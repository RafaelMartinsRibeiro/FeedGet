import { feedbackTypes, FeedbackType } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <div className="flex py-8 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => {
        return (
          <button
            key={key}
            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
            className="w-24 h-28 bg-zinc-800 rounded-lg py-5 flex flex-col items-center flex-1 gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={value.image.source} alt={value.image.alt}></img>
            <span>{value.title}</span>
          </button>
        );
      })}
    </div>
  );
}
