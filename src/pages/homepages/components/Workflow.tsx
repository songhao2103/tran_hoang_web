import React from "react";
import type { IWorkflowStep } from "../homepage.type";
import { WORKFLOW_STEPS } from "../data";
import SlideInView from "../../../components/scrolls/SlideInView";

const WorkflowItem = ({
  step,
  index,
}: {
  step: IWorkflowStep;
  index: number;
}) => {
  return (
    <SlideInView
      direction="up"
      triggerOnce
      className="w-full"
      delay={index * 0.1}
    >
      <div className="flex items-center flex-col gap-y-6">
        <div className="relative">
          <p className="w-10 h-10 bg-secondary flex items-center justify-center text-white rounded-full text-xl absolute">
            {index + 1}
          </p>
          <img
            src={step.imageUrl}
            alt="Step"
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <div className="flex items-center justify-center flex-col gap-y-3">
          <p className="title-h5 text-center">{step.title}</p>
          <p className="text-center">{step.description}</p>
        </div>
      </div>
    </SlideInView>
  );
};

const Workflow = () => {
  return (
    <div className="mt-[100px]">
      <SlideInView className="" direction="up" triggerOnce>
        <p className="text-center title-h1 mb-[50px]">Quy trình thực hiện</p>
      </SlideInView>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 md:gap-4 lg:gap-6 2xl:gap-x-10">
        {WORKFLOW_STEPS.map((step: IWorkflowStep, index: number) => (
          <WorkflowItem step={step} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Workflow;
