import {
  FileSearchIcon,
  LegalHammerIcon,
  LockPasswordIcon,
  TaskDaily01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link } from "react-router-dom"

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

const proofBadges = [
  "Private deployment",
  "Source-cited answers",
  "Audit logs and RBAC",
  "No external LLM APIs",
]

const useCases = [
  {
    icon: FileSearchIcon,
    title: "Document intelligence",
    text: "Ask legal documents plain-language questions and receive cited answers tied to source material.",
  },
  {
    icon: LegalHammerIcon,
    title: "Litigation support",
    text: "Summarize pleadings, transcripts, and evidence while extracting key facts, people, dates, and timelines.",
  },
  {
    icon: TaskDaily01Icon,
    title: "Contract review",
    text: "Identify clauses, flag deviations from firm standards, and generate internal risk summaries.",
  },
  {
    icon: LockPasswordIcon,
    title: "Redaction checks",
    text: "Detect sensitive information before filing to reduce risk from missed redactions.",
  },
]

export function HomePage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex max-w-3xl flex-col justify-center">
            <Badge className="mb-5 w-fit" variant="secondary">
              Private AI workflow systems for law firms
            </Badge>
            <h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
              Private AI for law firms. No data leaves your system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              NomosIQ helps legal teams query documents, review clauses, build
              timelines, and check redactions with source-cited answers inside
              the firm&apos;s controlled environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={demoUrl} target="_blank" rel="noreferrer">
                  Book Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/security">View Security Approach</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {proofBadges.map((badge) => (
                <Badge key={badge} variant="outline">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="self-center border-primary/20">
            <CardHeader>
              <CardTitle>Legal document query</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="rounded-lg border bg-background p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Question
                </p>
                <p className="mt-2 text-lg">
                  What is the termination clause in this lease?
                </p>
              </div>
              <div className="rounded-lg border bg-muted/40 p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Cited answer
                </p>
                <p className="mt-2 leading-7">
                  The lease allows termination with written notice after a
                  defined cure period. The answer links back to the exact source
                  section for attorney review.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Ingest", "Retrieve", "Cite"].map((step) => (
                  <div
                    key={step}
                    className="rounded-lg border bg-background p-3 text-center text-sm font-medium"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge variant="secondary">High-frequency workflows</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal">
            Built for the legal work that consumes review hours.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <HugeiconsIcon
                  icon={item.icon}
                  className="mb-3 size-6 text-primary"
                  aria-hidden
                />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge variant="secondary">Security-led adoption</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">
              Designed for firms that cannot use public AI on client data.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              NomosIQ is positioned as a private AI layer between existing legal
              systems and firm knowledge. The system supports private
              deployment, cited retrieval, access controls, and audit visibility
              without relying on external LLM APIs for sensitive work.
            </p>
            <Button asChild className="mt-6" variant="outline">
              <Link to="/product">Explore Product</Link>
            </Button>
          </div>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border bg-background px-4"
          >
            <AccordionItem value="private">
              <AccordionTrigger>Where does processing happen?</AccordionTrigger>
              <AccordionContent>
                Processing is planned for the firm&apos;s controlled
                environment, such as private cloud or on-prem infrastructure.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="citations">
              <AccordionTrigger>How are answers reviewed?</AccordionTrigger>
              <AccordionContent>
                Outputs are source-cited so attorneys can inspect the underlying
                document evidence instead of relying on black-box responses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="systems">
              <AccordionTrigger>What systems does it support?</AccordionTrigger>
              <AccordionContent>
                The marketing brief targets workflows around tools such as Clio,
                NetDocuments, Outlook, and SharePoint integrations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  )
}
