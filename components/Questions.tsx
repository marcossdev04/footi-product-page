import { AccordionDemo } from './AccordionQuestions'

export function Questions() {
  return (
    <div className="px-80 laptop:px-40 flex flex-col gap-5">
      <div className="text-[32px]">Frequently Asked Questions</div>
      <AccordionDemo />
    </div>
  )
}
