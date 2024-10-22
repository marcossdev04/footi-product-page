import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-2xl bg-zinc-800 px-10">
            What is Footi AI?
          </AccordionTrigger>
          <AccordionContent className="text-xl px-10 flex items-center py-3 bg-zinc-900">
            Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
