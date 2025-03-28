import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    id: number;
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

export const QuestionCard = ({ id, question, answer, isOpen, onToggle }: Props) => {
    return (
        <div className="p-4 bg-white rounded-lg">
            <div
                className="flex items-center justify-between rounded-lg cursor-pointer"
                onClick={() => onToggle(id)}
            >
                <p>{question}</p>
                {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div>
            {isOpen && (
                <p className="text-left pt-5 font-medium">{answer}</p>
            )}
        </div>
    );
};
