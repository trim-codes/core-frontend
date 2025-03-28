import { useState } from "react";
import { questions } from "../../data";
import { QuestionCard } from "./question-card";
import { Link } from "react-router-dom";

export const UseCases = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <section className="w-full bg-[#F9FAFB] md:py-20 py-10">
            <div className="max-w-[1300px] mx-auto px-2 py-8 text-center space-y-8">
                <h4>Frequently asked questions</h4>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    {questions.map((q) => (
                        <QuestionCard
                            key={q.id}
                            id={q.id}
                            question={q.question}
                            answer={q.answer}
                            isOpen={openIndex === q.id}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center text-center">
                <p className="flex items-center text-gray-500">
                    Have more questions?
                    <Link to="/" className="font-bold underline px-2">Contact Support</Link>
                    or
                    <Link to="/" className="font-bold underline pl-2">Contact Sales</Link>
                </p>
            </div>
        </section>
    );
};
