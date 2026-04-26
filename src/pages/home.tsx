import {
  FileSearchIcon,
  LegalHammerIcon,
  LockPasswordIcon,
  TaskDaily01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

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
    text: "Ask questions across leases, pleadings, transcripts, contracts, and discovery files. Get plain-language answers with citations tied to source material.",
  },
  {
    icon: LegalHammerIcon,
    title: "Litigation support",
    text: "Summarize pleadings, transcripts, and evidence while extracting key facts, people, dates, and timelines for review.",
  },
  {
    icon: TaskDaily01Icon,
    title: "Contract review",
    text: "Identify key clauses, flag deviations from firm standards, and generate structured review notes faster.",
  },
  {
    icon: LockPasswordIcon,
    title: "Redaction checks",
    text: "Detect sensitive information such as names, account numbers, and addresses before filing or sharing.",
  },
]

export function HomePage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 pt-14 pb-12 sm:px-6 sm:pt-[72px] sm:pb-16 lg:grid-cols-12 lg:px-8 lg:pt-24 lg:pb-20">
          <div className="flex max-w-[620px] flex-col justify-center lg:col-span-6">
            <Badge
              className="mb-5 w-fit px-3 py-1 text-[14px] leading-[18px]"
              variant="secondary"
            >
              Private AI for law firms
            </Badge>
            <h1 className="type-h1 text-foreground">
              Private AI for legal teams handling sensitive documents.
            </h1>
            <p className="mt-6 max-w-[620px] text-[20px] leading-[1.6] text-text-body">
              Search, review, summarize, and validate legal documents with cited
              answers inside your firm&apos;s environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={demoUrl} target="_blank" rel="noreferrer">
                  Book Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#security">View Security Approach</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {proofBadges.map((badge) => (
                <Badge
                  key={badge}
                  className="px-3 py-1 text-[14px] leading-[18px]"
                  variant="outline"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="self-center border-primary/20 lg:col-span-6">
            <CardHeader>
              <CardTitle>Legal document query</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="rounded-lg border bg-background p-4">
                <p className="type-ui text-text-soft">Question</p>
                <p className="mt-2 text-[18px] leading-[1.65] text-text-body">
                  What is the termination clause in this lease?
                </p>
              </div>
              <div className="rounded-lg border bg-muted/40 p-4">
                <p className="type-ui text-text-soft">Cited answer</p>
                <p className="mt-2 text-[16px] leading-[1.6] text-text-soft">
                  The lease allows termination with written notice after a
                  defined cure period. The answer links back to the exact source
                  section for attorney review.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Ingest", "Retrieve", "Cite"].map((step) => (
                  <div
                    key={step}
                    className="type-ui rounded-lg border bg-background p-3 text-center"
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
            Turn legal documents into workflows your attorneys can verify.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
            Nomos AI is designed for document-heavy practices that need faster
            review without compromising confidentiality, supervision, or
            internal controls.
          </p>
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
                <CardTitle className="type-h3">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[16px] leading-[1.6] text-text-soft">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="security" className="border-y bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge variant="secondary">Security-led adoption</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">
              Private AI for legal teams that need control.
            </h2>
            <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
              Nomos AI is built for firms that cannot use public AI tools on
              client documents. It provides a private AI layer inside your
              environment with source-cited retrieval, access controls, and
              audit visibility.
            </p>
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
