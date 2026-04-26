import {
  Audit01Icon,
  FileSearchIcon,
  LegalHammerIcon,
  Link01Icon,
  LockPasswordIcon,
  UserGroupIcon,
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
  {
    label: "Private deployment",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    label: "Source-cited answers",
    className: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    label: "Audit logs and RBAC",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    label: "No external LLM APIs",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
]

const workflowSignals = [
  {
    label: "Citation-backed answer",
    className: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    label: "Audit log visible",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    label: "Role-based access",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    label: "No external LLM API",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    label: "Private inference",
    className:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
]

const auditTrail = [
  { label: "Query submitted", status: "complete" },
  { label: "Source retrieved", status: "complete" },
  { label: "Answer generated", status: "complete" },
  { label: "Review pending", status: "pending" },
]

const trustItems = [
  {
    icon: LockPasswordIcon,
    title: "Private deployment",
    text: "Your data never leaves your environment.",
    iconClassName:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    icon: Link01Icon,
    title: "Source-linked answers",
    text: "Every answer cites its source.",
    iconClassName: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    icon: Audit01Icon,
    title: "Full audit visibility",
    text: "Track usage, sources, and reviews.",
    iconClassName: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    icon: UserGroupIcon,
    title: "Built for sensitive work",
    text: "Trusted by legal teams and advisors.",
    iconClassName:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
]

const useCases = [
  {
    icon: FileSearchIcon,
    title: "Document intelligence",
    text: "Ask questions across leases, pleadings, transcripts, contracts, and discovery files with cited answers tied to source material.",
    iconClassName: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    icon: LegalHammerIcon,
    title: "Litigation support",
    text: "Summarize pleadings, transcripts, and evidence while extracting key facts, people, dates, and timelines for review.",
    iconClassName:
      "border-success-border bg-success-muted text-success-foreground dark:text-success",
  },
  {
    icon: TaskDaily01Icon,
    title: "Contract review",
    text: "Identify key clauses, flag deviations from firm standards, and generate structured review notes faster.",
    iconClassName: "border-accent/30 bg-accent/10 text-accent",
  },
  {
    icon: LockPasswordIcon,
    title: "Redaction checks",
    text: "Detect sensitive information such as names, account numbers, and addresses before filing or sharing.",
    iconClassName: "border-accent/30 bg-accent/10 text-accent",
  },
]

function HeroProductMockup() {
  return (
    <Card
      className="w-full max-w-[540px] overflow-hidden rounded-2xl border bg-card lg:col-span-6 lg:mt-3 lg:justify-self-end"
      aria-label="Product mockup showing legal document review with cited AI answer and audit trail."
    >
      <CardContent className="grid gap-5 p-5 sm:p-6">
        <div>
          <Badge
            className="border-accent/30 bg-accent/10 px-3 py-1 text-[14px] leading-[18px] text-accent"
            variant="outline"
          >
            Example workflow
          </Badge>
        </div>
        <div className="flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="type-ui text-foreground">Matter: Lease Review</p>
            <p className="mt-1 text-[15px] leading-5 text-text-soft">
              Commercial Lease · 14 pages · Private workspace
            </p>
          </div>
          <Badge
            className="w-fit border-warning-border bg-warning-muted px-3 py-1 text-[14px] leading-[18px] text-warning-foreground dark:text-warning"
            variant="secondary"
          >
            Attorney review required
          </Badge>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border bg-background p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="type-ui text-foreground">Source document</p>
              <span className="text-[14px] leading-[18px] text-text-soft">
                Lease_Agreement.pdf
              </span>
            </div>
            <div className="space-y-4 rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="type-ui text-foreground">
                  Section 12.2 — Termination for Cause
                </p>
                <p className="mt-3 text-[15px] leading-6 text-text-body">
                  Either party may terminate this agreement with sixty (60)
                  days&apos; written notice if a material breach remains uncured
                  for thirty (30) days after notice.
                </p>
              </div>
              <div className="rounded-xl border-l-2 border-accent bg-accent/10 p-3">
                <p className="text-[15px] leading-6 text-text-body">
                  Highlighted clause: notice period, breach condition, and cure
                  window identified for attorney review.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border bg-background p-4">
              <p className="type-ui text-text-soft">Question</p>
              <p className="mt-2 text-[16px] leading-[1.6] text-text-body">
                What are the termination rights in this lease?
              </p>
              <div className="mt-4 rounded-xl border bg-muted/30 p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge
                    className="border-warning-border bg-warning-muted px-3 py-1 text-[14px] leading-[18px] text-warning-foreground dark:text-warning"
                    variant="outline"
                  >
                    Review pending
                  </Badge>
                  <span className="text-[14px] leading-[18px] text-accent">
                    Confidence: source-backed
                  </span>
                </div>
                <p className="text-[16px] leading-[1.6] text-text-body">
                  The lease allows termination after 60 days&apos; written
                  notice if a material breach remains uncured for 30 days.
                </p>
                <div className="mt-4 rounded-xl border border-accent/30 bg-accent/10 p-3">
                  <p className="type-ui text-foreground">
                    Source: Section 12.2, Termination for Cause
                  </p>
                  <span className="mt-2 inline-block text-[15px] leading-5 font-medium text-accent">
                    Jump to source
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflowSignals.map((signal) => (
                <div
                  key={signal.label}
                  className={`rounded-xl border px-3 py-2 ${signal.className}`}
                >
                  <p className="text-[14px] leading-[18px]">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-background p-4">
          <p className="type-ui text-foreground">Audit trail</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-4">
            {auditTrail.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span
                  className={`size-2 rounded-full ${
                    item.status === "pending" ? "bg-warning" : "bg-accent"
                  }`}
                  aria-hidden="true"
                />
                <span className="text-[14px] leading-[18px] text-text-soft">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TrustStrip() {
  return (
    <section
      className="border-b bg-muted/30"
      aria-label="Nomos AI trust signals"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border bg-card md:grid-cols-2 xl:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-4 p-5 ${
                index > 0 ? "border-t md:border-t-0" : ""
              } ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index > 1 ? "md:border-t xl:border-t-0" : ""} ${
                index > 0 ? "xl:border-l" : ""
              }`}
            >
              <div
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${item.iconClassName}`}
                aria-hidden="true"
              >
                <HugeiconsIcon icon={item.icon} className="size-5" />
              </div>
              <div>
                <h2 className="type-ui text-foreground">{item.title}</h2>
                <p className="mt-1 text-[14px] leading-[18px] text-text-soft">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 pt-14 pb-12 sm:px-6 sm:pt-[72px] sm:pb-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pt-24 lg:pb-[88px]">
          <div className="max-w-[560px] lg:col-span-6">
            <Badge
              className="mb-4 w-fit border-accent/30 bg-accent/10 px-3 py-1 text-[14px] leading-[18px] text-accent"
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
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={demoUrl} target="_blank" rel="noreferrer">
                  Book Demo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#security">View Security Approach</a>
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {proofBadges.map((badge) => (
                <Badge
                  key={badge.label}
                  className={`px-3 py-1 text-[14px] leading-[18px] ${badge.className}`}
                  variant="outline"
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>

          <HeroProductMockup />
        </div>
      </section>

      <TrustStrip />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-[680px]">
          <Badge
            className="border-accent/30 bg-accent/10 text-accent"
            variant="secondary"
          >
            High-frequency workflows
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal">
            Built for the legal work that eats review time.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
            NOMOS AI helps document-heavy practices review, summarize, and
            verify legal materials faster without losing citation, privacy, or
            attorney oversight.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <Card
              key={item.title}
              className="h-full rounded-2xl border bg-card transition-colors hover:border-accent/30 hover:bg-muted/40"
            >
              <CardHeader className="p-6 pb-3">
                <div
                  className={`mb-4 flex size-11 items-center justify-center rounded-xl border ${item.iconClassName}`}
                  aria-hidden="true"
                >
                  <HugeiconsIcon icon={item.icon} className="size-5" />
                </div>
                <CardTitle className="type-h3">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-6">
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
