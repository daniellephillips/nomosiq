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
    title: "Private or firm-controlled deployment",
    text: "Nomos AI is designed for private or firm-controlled environments, so client documents can stay within infrastructure your firm approves.",
  },
  {
    title: "No training on client data",
    text: "Client files are handled as firm materials, not training data for shared models or public AI systems.",
  },
  {
    title: "Source-linked answers",
    text: "Answers are designed to point back to the documents, clauses, emails, or case materials that support them.",
  },
  {
    title: "Role-based access",
    text: "Access can be configured around firm roles, matters, and internal permission boundaries.",
  },
  {
    title: "Audit visibility",
    text: "Workflow activity can be reviewed so firms have visibility into searches, outputs, and review steps.",
  },
  {
    title: "Attorney review before action",
    text: "Nomos AI supports attorney review by making outputs easier to inspect before they are used in client work.",
  },
]

export function SecurityPage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge variant="secondary">Security</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            AI adoption for law firms starts with control.
          </h1>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.65] text-text-body">
            Nomos AI is designed for legal workflows where client documents,
            source text, and review history need to stay under firm control.
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
                <p className="text-[16px] leading-[1.6] text-muted-foreground">
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
              Built for small firms that need answers they can verify.
            </h2>
            <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
              Nomos AI helps attorneys search, summarize, and review sensitive
              material with source links and review visibility, so every answer
              can be checked before it is used in client work.
            </p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border bg-background px-4"
          >
            <AccordionItem value="processing">
              <AccordionTrigger>Where does processing happen?</AccordionTrigger>
              <AccordionContent>
                Nomos AI is designed for private or firm-controlled deployment
                models. During implementation, the deployment approach should be
                reviewed against your firm&apos;s document storage, security
                requirements, and client-confidentiality obligations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="training">
              <AccordionTrigger>
                Is client data used to train models?
              </AccordionTrigger>
              <AccordionContent>
                No. Nomos AI is positioned so client documents are not used to
                train shared models or public AI systems. Client materials
                should remain within the firm-approved environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="verification">
              <AccordionTrigger>How are answers verified?</AccordionTrigger>
              <AccordionContent>
                Responses are designed to include source links back to the
                documents or passages used to generate the answer. Attorneys
                should review those sources before relying on an output.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="access">
              <AccordionTrigger>
                What access controls are supported?
              </AccordionTrigger>
              <AccordionContent>
                Access can be configured around the way your firm separates
                matters, users, and responsibilities. The goal is to keep AI
                workflows aligned with existing permission boundaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="systems">
              <AccordionTrigger>
                What systems can Nomos AI connect to?
              </AccordionTrigger>
              <AccordionContent>
                Nomos AI is designed to work with common firm document sources,
                email, and case or matter workflows. Specific systems and access
                requirements should be reviewed during implementation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="implementation">
              <AccordionTrigger>
                What happens during implementation?
              </AccordionTrigger>
              <AccordionContent>
                A focused review should confirm the documents, workflows, user
                roles, source-link expectations, and security requirements
                before any live firm materials are connected.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
