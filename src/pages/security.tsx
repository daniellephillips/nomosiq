import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { demoUrl } from "@/lib/constants"

const controls = [
  {
    title: "Private deployment",
    text: "Designed for controlled firm infrastructure, including private cloud or on-prem environments.",
  },
  {
    title: "No external LLM APIs",
    text: "Sensitive document workflows are positioned around private inference instead of public API exposure.",
  },
  {
    title: "Audit visibility",
    text: "Workflow activity should be observable for supervision, review, and internal accountability.",
  },
  {
    title: "Role-based access",
    text: "Access controls align AI document workflows with the firm's internal permission boundaries.",
  },
]

export function SecurityPage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge variant="secondary">Security</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            AI adoption for legal teams starts with control.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            NomosIQ is built around the practical constraints that keep firms
            from using public AI tools on client documents: confidentiality,
            supervision, access control, and auditability.
          </p>
          <Button asChild className="mt-8" size="lg">
            <a href={demoUrl} target="_blank" rel="noreferrer">
              Book Demo
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {controls.map((control) => (
            <Card key={control.title}>
              <CardHeader>
                <CardTitle>{control.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {control.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge variant="secondary">Legal-market fit</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">
              Built for firms that need explainable AI outputs.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              The system emphasizes cited retrieval and audit-ready workflows so
              legal teams can review the source material behind an answer before
              using it in client work.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border bg-background px-4"
          >
            <AccordionItem value="ethics">
              <AccordionTrigger>
                Does NomosIQ replace attorney review?
              </AccordionTrigger>
              <AccordionContent>
                No. The site positions NomosIQ as workflow infrastructure that
                helps attorneys find, summarize, and inspect source material.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="data">
              <AccordionTrigger>What is the data boundary?</AccordionTrigger>
              <AccordionContent>
                The planned deployment model keeps processing inside the
                firm&apos;s controlled environment instead of exposing sensitive
                material to external AI providers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="proof">
              <AccordionTrigger>How should firms evaluate it?</AccordionTrigger>
              <AccordionContent>
                The brief recommends a live demo: upload a document, query it,
                inspect the cited answer, and review audit visibility.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
